import React, { useEffect, useState } from 'react';
import './NetflixTitle.css';
import netflixSound from './netflix-sound.mp3';
import { useNavigate } from 'react-router-dom';

const NetflixTitle = () => {
  const [isClicked, setIsClicked] = useState(false);
  const navigate = useNavigate();

  const handlePlaySound = () => {
    const audio = new Audio(netflixSound);
    audio.play().catch(error => console.error("Audio play error:", error));
    setIsClicked(true);
  };

  useEffect(() => {
    if (isClicked) {
      const timer = setTimeout(() => {
        navigate('/browse');
      }, 4000);
      return () => clearTimeout(timer);
    }
  }, [isClicked, navigate]);

  return (
    <div className="netflix-container" onClick={handlePlaySound}>
      <div className={`netflix-title-wrapper ${isClicked ? 'animate' : ''}`}>
        <svg
          viewBox="0 0 1000 300"
          className="netflix-arc-svg"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <path
              id="textArc"
              d="M 50,250 Q 500,0 950,250"
              fill="none"
            />
          </defs>
          <text className="netflix-arc-text">
            <textPath
              href="#textArc"
              startOffset="50%"
              textAnchor="middle"
            >
              SANIYA SARATKAR
            </textPath>
          </text>
        </svg>
      </div>
    </div>
  );
};

export default NetflixTitle;
