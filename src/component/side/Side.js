import React, { useState, useRef, useEffect } from "react";
import styles from './Side.module.css';

function Side() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [volume, setVolume] = useState(0.5);
  const audioRef = useRef(null);

  const handlePlayPause = () => {
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  const handlePause = () => {
    audioRef.current.pause();
    audioRef.current.currentTime = 0;
    if (isPlaying) setIsPlaying(!isPlaying);
  }

  const handleVolumeChange = (e) => {
    const newVolume = e.target.value;
    audioRef.current.volume = newVolume;
    setVolume(newVolume);
  };

  useEffect(() => {
    const gradient_value = (100 / 1) * volume;
    document.documentElement.style.setProperty(
      '--slider-background',
      `linear-gradient(to right, orange 0%, orange ${gradient_value}%, #ececec ${gradient_value}%, #ececec 100%)`
    );
  }, [volume]);

  return (
    <div className={styles.container}>
      <div className={styles.mySymbol}>
        <span>마이심볼</span>
        <div className={styles.symbols}>
          <span>🌱</span>
          <span>🎸</span>
          <span>🍰</span>
        </div>
      </div>

      <div className={styles.bgm}>
        <div className={styles.musicTitle}>
          <img src="/img/music.png" alt="music icon" className={`${isPlaying ? styles.rotate : ''}`} />
          <span>적도 - 전기뱀장어</span>
        </div>
        <div className={styles.control}>
          <div className={styles.play}>
            <span onClick={handlePlayPause} className={`${isPlaying ? styles.orange : styles.play}`}>
              {isPlaying ? "❚❚" : "▶"}
            </span>
            <span onClick={handlePause}>
              ■
            </span>
          </div>

          <div>
            <label htmlFor="volume" className="retro">vol </label>
            <input
              type="range"
              min="0"
              max="1"
              step="0.01"
              value={volume}
              onChange={handleVolumeChange}
              style={{
                background: `var(--slider-background)`
              }}
            />
            <audio ref={audioRef} src="/music/bgm.mp3"></audio>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Side;