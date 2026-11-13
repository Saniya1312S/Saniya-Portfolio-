import React from 'react';
import { useNavigate } from 'react-router-dom';
import ProfileCard from '../components/ProfileCard';
import blueImage from '../images/blue.png';
import greyImage from '../images/grey.png';
import redImage from '../images/red.png';
import yellowImage from '../images/yellow.png';
import './browse.css';

const Browse: React.FC = () => {
  const navigate = useNavigate();

  const profiles = [
    {
      name: "recruiter",
      image: blueImage,
      backgroundGif: "https://media.giphy.com/media/l0MYt5jPR6QX5pnqM/giphy.gif" // Conference room vibes inspired by The Office
    },
    {
      name: "developer",
      image: greyImage,
      backgroundGif: "https://media.giphy.com/media/xT0xeJpnrWC4XWblEk/giphy.gif" // Classic Matrix code rain
    },
    {
      name: "stalker",
      image: redImage,
      backgroundGif: "https://media.giphy.com/media/l4FGuhL4U2WyjdkaY/giphy.gif" // Noir silhouette for mysterious watcher
    },
    {
      name: "adventurer",
      image: yellowImage,
      backgroundGif: "https://media.giphy.com/media/xT0xelrGA7QtTNPaoA/giphy.gif" // Tomb-raiding torch-lit exploration
    },
  ];

  const handleProfileClick = (profile: { name: string; image: string; backgroundGif: string }) => {
    navigate(`/profile/${profile.name}`, { state: { profileImage: profile.image, backgroundGif: profile.backgroundGif } });
  };

  return (
    <div className="browse-container">
      <p className='who-is-watching'>Who's Watching?</p>
      <div className="profiles">
        {profiles.map((profile, index) => (
          <ProfileCard
            key={index}
            name={profile.name}
            image={profile.image}
            onClick={() => handleProfileClick(profile)}
          />
        ))}
      </div>
    </div>
  );
};

export default Browse;
