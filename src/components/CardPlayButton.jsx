import {Play, Pause} from './Player';
import {usePlayerStore} from '../store/playerStore';

export default function CardPlayButton({id, size}) {
    const {currentMusic, isPlaying, setIsPlaying, setCurrentMusic} = usePlayerStore(state => state);
    
    const isPlayingPlaylist = isPlaying && currentMusic?.playlist.id === id
    const handleClick = () => { 
        if(isPlayingPlaylist) {
            setIsPlaying(false);
            return
        }
        
        // fetch con promesa
        fetch(`/api/get-info-playlist.json?id=${id}`)
        .then(res => res.json())
        .then(data => {
            const {songs, playlist} = data
            
            setIsPlaying(true)
            setCurrentMusic({songs, playlist, song: songs[0]})
            //console.log({songs, playlist})
           
        })

        // fetch con await
       // const res = await fetch(`/api/get-info-playlist.json?id=${id}`);
       // const data = await res.json();
       // const {songs, playlist} = data;
    }


  return (
    <button onClick={handleClick} className='rounded-full bg-green-500 p-4 hover:scale-105 transition hover:bg-green-400'>
        {isPlayingPlaylist ? <Pause/> : <Play/>}
    </button>
  )
}
