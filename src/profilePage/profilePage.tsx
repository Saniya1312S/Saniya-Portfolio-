import React from 'react';
import { useLocation, useParams } from 'react-router-dom';
import './ProfilePage.css';

import ProfileBanner from './ProfileBanner';
import TopPicksRow from './TopPicksRow';
import ContinueWatching from './ContinueWatching';
type ProfileType = 'recruiter' | 'developer' | 'stalker' | 'adventurer';

const ProfilePage: React.FC = () => {
  const location = useLocation();
  const backgroundGif = location.state?.backgroundGif || "https://media.giphy.com/media/xT9IgzoKnwFNmISR8I/giphy.gif"; // Default GIF
  const { profileName } = useParams<{ profileName: string }>();

  const profile = ['recruiter', 'developer', 'stalker', 'adventurer'].includes(profileName!)
    ? (profileName as ProfileType)
    : 'recruiter';
  return (
    <main className={`profile-shell profile-${profile}`}>
      <section className="profile-banner-wrapper">
        <ProfileBanner backgroundImageUrl={backgroundGif} />
      </section>
      <section className="profile-section">
        <div className="profile-section-inner">
          <TopPicksRow profile={profile} />
        </div>
      </section>
      <section className="profile-section">
        <div className="profile-section-inner">
          <ContinueWatching profile={profile} />
        </div>
      </section>
    </main>
  );
};

export default ProfilePage;
