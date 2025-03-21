import React, { useState, useRef } from "react";
import "./Title.css";
import { FaPlay, FaPause} from "react-icons/fa";
import reckless from "./reckless.png";
import song from "./song.mp3";

const Title = () => {

    const [isPlaying, setIsPlaying] = useState(false);
    const [progress, setProgress] = useState(0);
    const audioRef = useRef(null);

    const togglePlay = () =>{
        if(audioRef.current.paused){
            audioRef.current.play();
            setIsPlaying(true);
        }
        else{
            audioRef.current.pause();
            setIsPlaying(false);
        }
    };

    const updateProgress = () => {
        if (audioRef.current) {
          setProgress((audioRef.current.currentTime / audioRef.current.duration) * 100);
        }
    };

    const seekSong = (e) => {
        const newTime = (e.target.value / 100) * audioRef.current.duration;
        const wasPlaying = !audioRef.current.paused; // Check if it was playing
    
        audioRef.current.currentTime = newTime;
        setProgress(e.target.value);
    
        if (wasPlaying) {
          audioRef.current.play(); // Resume only if it was playing before
        }
    };

  return (
    <div className="main-title">
        <div class="item-1">
            <img src={reckless}/>   
        </div>
        <div className="item item-2">
            <div className="title">
                <div className="heaven">
                    <h1>HEAVEN</h1>
                </div>
                <div className="button">
                    <audio ref={audioRef} src={song} onTimeUpdate={updateProgress}></audio>
                    <div className="player-container">
                        <button className="play-pause-button" onClick={togglePlay}>
                        {isPlaying ? <FaPause /> : <FaPlay />}
                        </button>
                    </div>
                    <div className="seek">
                    <input
                        type="range"
                        min="0"
                        max="100"
                        value={progress}
                        onChange={seekSong}
                        className="seek-bar"
                        />
                    </div>
                </div>
            </div>
        </div>
    </div>
  );
};

export default Title;



