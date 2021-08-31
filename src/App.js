import {useState, useEffect} from 'react';
import Player from './components/Player/Player';

function App() {
  const [songs] = useState([
    {
      title: "Night Changes",
      artist: "One Direction",
      img_src: "./images/song-1.jpg",
      src: "./music/One+Direction+Night+Changes.mp3"
    },
    {
      title: "Steal My Girl",
      artist: "One Direction",
      img_src: "./images/song-2.jpg",
      src: "./music/One Direction - Steal My Girl.mp3"
    },
    {
      title: "Story Of My life",
      artist: "One Direction",
      img_src: "./images/song-4.jpg",
      src: "./music/one-direction-story-of-my-life-4k.mp3"
    },
    {
      title: "What Makes You Beautiful",
      artist: "One Direction",
      img_src: "./images/song-4.jpg",
      src: "./music/One+Direction+What+Makes+You+Beautiful+Audio.mp3"
    }
  ]);

  const [currentSongIndex, setCurrentSongIndex] = useState(0);
  const [nextSongIndex, setNextSongIndex] = useState(0);

  useEffect(() => {
    setNextSongIndex(() => {
      if (currentSongIndex + 1 > songs.length - 1) {
        return 0;
      } else {
        return currentSongIndex + 1;
      }
    });
  }, [currentSongIndex]);

  return (
    <div className="App">
      <Player 
        currentSongIndex={currentSongIndex} 
        setCurrentSongIndex={setCurrentSongIndex} 
        nextSongIndex={nextSongIndex} 
        songs={songs}
      />
    </div>
    
  );
}

export default App;
