import React from 'react';
import './ProfileBanner.css';
import PlayButton from '../components/PlayButton';
import MoreInfoButton from '../components/MoreInfoButton';
import { ProfileBanner as ProfileBannerType } from '../types';

const bannerData: ProfileBannerType = {
  backgroundImage: {
    url: 'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1600&q=80',
  },
  headline: 'AI & Data Science Enthusiast | Research Intern',
  resumeLink: {
    url: '#',
  },
  linkedinLink: 'https://in.linkedin.com/in/saniya-saratkar-1624ba250',
  profileSummary:
    "As a third-year BTech student in AI and Data Science at DMIHER, I'm passionate about solving real-world problems through AI-driven solutions. From conducting ESG research on AI models at IIT Kharagpur to developing edge device AI at Deeptimaan Info System, I blend academic rigor with hands-on innovation. With 8 published research papers in IEEE, AIP, and AIMS journals, and recognition including a $8,275 UC Berkeley AI scholarship, I continuously seek opportunities to push the boundaries of AI in healthcare, deep learning, and beyond.",
};

interface ProfileBannerProps {
  backgroundImageUrl?: string;
}

const ProfileBanner: React.FC<ProfileBannerProps> = ({ backgroundImageUrl }) => {
  const heroBackground = backgroundImageUrl ?? bannerData.backgroundImage.url;
  const handlePlayClick = () => {
    window.open(bannerData.resumeLink.url, '_blank');
  };

  const handleLinkedinClick = () => {
    window.open(bannerData.linkedinLink, '_blank');
  };

  return (
    <div
      className="profile-banner"
      style={{
        backgroundImage: `linear-gradient(180deg, rgba(0,0,0,0.65) 0%, rgba(0,0,0,0.9) 100%), url(${heroBackground})`,
      }}
    >
      <div className="banner-content">
        <h1 className="banner-headline" id="headline">
          {bannerData.headline}
        </h1>
        <p className="banner-description">{bannerData.profileSummary}</p>

        <div className="banner-buttons">
          <PlayButton onClick={handlePlayClick} label="Resume" />
          <MoreInfoButton onClick={handleLinkedinClick} label="Linkedin" />
        </div>
      </div>
    </div>
  );
};

export default ProfileBanner;
