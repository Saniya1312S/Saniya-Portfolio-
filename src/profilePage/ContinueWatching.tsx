import React from 'react';
import { Link } from 'react-router-dom';
import { FaPlay } from 'react-icons/fa';
import './ContinueWatching.css';

type ProfileType = 'recruiter' | 'developer' | 'stalker' | 'adventurer';

interface ContinueWatchingProps {
  profile: ProfileType;
}

const continueWatchingConfig = {
  recruiter: [
    { title: "Music", imgSrc: "https://picsum.photos/id/1025/300/200", link: "/music" },
    { title: "Reading", imgSrc: "https://picsum.photos/id/1026/300/200", link: "/reading" },
    { title: "Blogs", imgSrc: "https://picsum.photos/id/1027/300/200", link: "/blogs" },
    { title: "Awards", imgSrc: "https://picsum.photos/id/1036/300/200", link: "/awards" },
    { title: "Contact Me", imgSrc: "https://picsum.photos/id/1029/300/200", link: "/contact-me" }
  ],
  developer: [
    { title: "Music", imgSrc: "https://picsum.photos/id/1025/300/200", link: "/music" },
    { title: "Reading", imgSrc: "https://picsum.photos/id/1026/300/200", link: "/reading" },
    { title: "Blogs", imgSrc: "https://picsum.photos/id/1027/300/200", link: "/blogs" },
    { title: "Certifications", imgSrc: "https://picsum.photos/id/1028/300/200", link: "/certifications" },
    { title: "Awards", imgSrc: "https://picsum.photos/id/1035/300/200", link: "/awards" },
    { title: "Contact Me", imgSrc: "https://picsum.photos/id/1029/300/200", link: "/contact-me" }
  ],
  stalker: [
    { title: "Reading", imgSrc: "https://picsum.photos/id/1026/300/200", link: "/reading" },
    { title: "Blogs", imgSrc: "https://picsum.photos/id/1027/300/200", link: "/blogs" },
    { title: "Awards", imgSrc: "https://picsum.photos/id/1032/300/200", link: "/awards" },
    { title: "Contact Me", imgSrc: "https://picsum.photos/id/1029/300/200", link: "/contact-me" }
  ],
  adventurer: [
    { title: "Music", imgSrc: "https://picsum.photos/id/1025/300/200", link: "/music" },
    { title: "Reading", imgSrc: "https://picsum.photos/id/1026/300/200", link: "/reading" },
    { title: "Certifications", imgSrc: "https://picsum.photos/id/1028/300/200", link: "/certifications" },
    { title: "Awards", imgSrc: "https://picsum.photos/id/1042/300/200", link: "/awards" },
    { title: "Contact Me", imgSrc: "https://picsum.photos/id/1029/300/200", link: "/contact-me" }
  ]
};

const ContinueWatching: React.FC<ContinueWatchingProps> = ({ profile }) => {
  const continueWatching = continueWatchingConfig[profile];

  return (
    <div className="continue-watching-row">
      <div className="row-header">
        <h2 className="row-title">Continue Watching for {profile}</h2>
        <p className="row-subtitle">Jump back into the stories you left on pause.</p>
      </div>
      <div className="card-row" role="list">
        {continueWatching.map((pick, index) => (
          <Link to={pick.link} key={index} className="pick-card" role="listitem">
            <img src={pick.imgSrc} alt={pick.title} className="pick-image" loading="lazy" />
            <div className="pick-gradient" />
            <div className="overlay">
              <button className="play-pill" aria-label={`Play ${pick.title}`}>
                <FaPlay />
              </button>
              <div className="pick-label">{pick.title}</div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default ContinueWatching;
