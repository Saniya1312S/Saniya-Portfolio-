import React from 'react';
import './ProfileBanner.css';
import PlayButton from '../components/PlayButton';
import MoreInfoButton from '../components/MoreInfoButton';
import { ProfileBanner as ProfileBannerType } from '../types';

const bannerData: ProfileBannerType = {
  backgroundImage: {
    url: 'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1600&q=80',
  },
  headline: 'AI & Data Science Enthusiast',
  resumeLink: {
    url: '#',
  },
  linkedinLink: 'https://in.linkedin.com/in/saniya-saratkar-1624ba250',
  profileSummary:
    "With 2+ years of experience as a Data Science Intern, I have worked at multiple places including ISRO, UC Berkeley, & IIT Kharagpur. Skilled in Gen AI, NLP, Computer Vision, and building end-to-end AI applications. Received an $8,500 merit-based scholarship for the UC Berkeley AI Internship (2025) and authored 20+ research publications across IEEE, AIP, and AIMS Bioengineering journals.",
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
