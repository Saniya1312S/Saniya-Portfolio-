import React from 'react';
import './Reading.css';

const books = [
  {
    title: 'Show Your Work!',
    author: 'Austin Kleon',
    imgSrc: 'https://images.unsplash.com/photo-1455885666463-1ea8f31e6617?auto=format&fit=crop&w=600&q=80',
    description: 'Reminds me to narrate the journey and invite other first-gen engineers into tech.',
  },
  {
    title: 'Range',
    author: 'David Epstein',
    imgSrc: 'https://images.unsplash.com/photo-1481627834876-b7833e8f5570?auto=format&fit=crop&w=600&q=80',
    description: 'Proof that trying many tracks (hardware, AI, leadership) makes me a better builder.',
  },
  {
    title: 'Creative Confidence',
    author: 'Tom & David Kelley',
    imgSrc: 'https://images.unsplash.com/photo-1507842217343-583bb7270b66?auto=format&fit=crop&w=600&q=80',
    description: 'Design thinking inspiration for everything from Studyme to community workshops.',
  },
  {
    title: 'The Big Leap',
    author: 'Gay Hendricks',
    imgSrc: 'https://images.unsplash.com/photo-1513475382585-d06e58bcb0ea?auto=format&fit=crop&w=600&q=80',
    description: 'Helps me quiet impostor syndrome before major interviews or hackathons.',
  },
  {
    title: 'Stay True',
    author: 'Hua Hsu',
    imgSrc: 'https://images.unsplash.com/photo-1457369804613-52c61a468e7d?auto=format&fit=crop&w=600&q=80',
    description: 'A reflection on friendship and heritage that grounds my leadership work.',
  },
  {
    title: 'Engineering Empathy',
    author: 'Saniya Saratkar (in progress)',
    imgSrc: 'https://images.unsplash.com/photo-1469474968028-56623f02e42e?auto=format&fit=crop&w=600&q=80',
    description: 'Notes from fellowships, mentorship, and the inclusive tools I am building next.',
  },
];

const showComingSoon = true;

const Reading: React.FC = () => {
  const hasBooks = !showComingSoon && books.length > 0;

  return (
    <div className="reading-container">
      <h2 className="reading-title">Books that keep me curious</h2>
      <p className="reading-intro">I rotate between tech craft, creativity, and memoirs so my engineering stays human.</p>

      {hasBooks ? (
        <div className="books-grid">
          {books.map((book, index) => (
            <div key={index} className="book-card" style={{ '--delay': `${index * 0.1}s` } as React.CSSProperties}>
              <img src={book.imgSrc} alt={book.title} className="book-cover" />
              <div className="book-info">
                <h3 className="book-title">{book.title}</h3>
                <h4 className="book-author">{book.author}</h4>
                <p className="book-description">{book.description}</p>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="reading-placeholder">
          <p>Reading list refresh is coming soon.</p>
          <p>Sharing the essays, memoirs, and zines that are shaping my perspective next.</p>
          <span>Connect on LinkedIn for bite-sized reviews until the full list drops.</span>
        </div>
      )}
    </div>
  );
};

export default Reading;
