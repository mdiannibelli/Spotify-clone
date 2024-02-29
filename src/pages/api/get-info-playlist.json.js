// Api para cargar todas las canciones
import { allPlaylists, songs as allSongs } from "../../lib/data";
export async function GET({params, request}) {
    // get "id" from url search params
    const {url} = request

    // /api/get-info-playlist.json ? id=${id} <==
    const urlObject = new URL(url)
    const id = urlObject.searchParams.get('id');

    // recuperar playlist
    const playlist = allPlaylists.find((playlist) => playlist.id === id);

    // recuperar songs
    const songs = allSongs.filter(song => song.albumId === playlist?.albumId)

    return new Response(JSON.stringify({playlist, songs}), {
        headers: {
            'Content-Type': 'application/json'
        }
    })
}