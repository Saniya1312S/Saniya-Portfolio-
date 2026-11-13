import React from 'react';
import './Music.css';

const favoriteGenres = ['Afrobeats', 'Alte', 'Neo-Soul', 'Hip-Hop', 'Focus Instrumentals'];
const favoriteAlbums = [
  {
    title: 'I Told Them...',
    artist: 'Burna Boy',
    imgSrc: 'https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&w=600&q=80',
  },
  {
    title: '19 & Dangerous',
    artist: 'Ayra Starr',
    imgSrc: 'https://images.unsplash.com/photo-1483412033650-1015ddeb83d1?auto=format&fit=crop&w=600&q=80',
  },
  {
    title: 'Made in Lagos',
    artist: 'Wizkid',
    imgSrc: 'https://images.unsplash.com/photo-1507878866276-a947ef722fee?auto=format&fit=crop&w=600&q=80',
  },
  {
    title: 'Heaven or Las Vegas (Remaster)',
    artist: 'Cocteau Twins',
    imgSrc: 'https://images.unsplash.com/photo-1464375117522-1311d6a5b81f?auto=format&fit=crop&w=600&q=80',
  },
];

const spotifyEmbeds = [
  {
    title: 'Focus Mode Playlist',
    description: 'Afrobeats + alte tracks that fuel my late-night coding sessions.',
    src: 'https://open.spotify.com/embed/playlist/6imfyyk2bTLeyphVnO4gMr?utm_source=generator',
  },
  {
    title: 'I Told Them... · Burna Boy',
    description: 'Album that reminds me to stay bold with every build.',
    src: 'https://open.spotify.com/embed/album/1BZoqf8Zje5nGdwZhOjAtD?utm_source=generator',
  },
  {
    title: '19 & Dangerous · Ayra Starr',
    description: 'On repeat when I need confidence before shipping demos.',
    src: 'https://open.spotify.com/embed/album/6HpMdN52TfJAwVbmkrFeBN?utm_source=generator',
  },
];

const Music: React.FC = () => {
  return (
    <div className="music-page">
      <div className="quote">
        <p>"Soundtracking my grind with Afrobeats energy, experimental vibes, and anything that keeps late-night builds flowing."</p>
      </div>

      <div className="genre-section">
        <h3>What I'm looping</h3>
        <div className="genres">
          {favoriteGenres.map((genre, index) => (
            <div key={index} className="genre-card" style={{ animationDelay: `${index * 0.2}s` }}>
              <p>{genre}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="albums-section">
        <h3>Albums on repeat</h3>
        <div className="albums">
          {favoriteAlbums.map((album, index) => (
            <div key={index} className="album-card" style={{ animationDelay: `${index * 0.3}s` }}>
              <img src={album.imgSrc} alt={album.title} className="album-image" />
              <div className="album-details">
                <h4>{album.title}</h4>
                <p>by {album.artist}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="spotify-section">
        <h3>Listen With Me</h3>
        <div className="spotify-embeds">
          {spotifyEmbeds.map((embed, index) => (
            <div key={embed.src} className="spotify-card" style={{ animationDelay: `${index * 0.2}s` }}>
              <h4>{embed.title}</h4>
              <p>{embed.description}</p>
              <div className="spotify-iframe">
                <iframe
                  title={embed.title}
                  src={embed.src}
                  width="100%"
                  height="352"
                  frameBorder={0}
                  allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                  loading="lazy"
                ></iframe>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Music;
