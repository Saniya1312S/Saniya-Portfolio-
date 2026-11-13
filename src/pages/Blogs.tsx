import React from 'react';
import './Blogs.css';
import { FaMedium, FaDev, FaGithub, FaLinkedin } from 'react-icons/fa';

const blogs = [
  {
    title: 'Building Studyme (AI Study Companion)',
    platform: 'GitHub Notes',
    icon: <FaGithub />,
    link: 'https://github.com/Havcker243',
    description: 'Architecture sketches, caching experiments, and evaluation prompts for my document assistant.',
  },
  {
    title: 'PathFinderGPT Create-a-thon Recap',
    platform: 'Portfolio',
    icon: <FaDev />,
    link: 'https://havcker243.github.io/Portfolio/',
    description: 'How our team prototyped career maps for HBCU students with Flask, React, and OpenAI.',
  },
  {
    title: 'Inclusive Engineering Dispatch',
    platform: 'LinkedIn',
    icon: <FaLinkedin />,
    link: 'https://www.linkedin.com/in/oludolapo-adegbesan-3168a7218/',
    description: 'Stories from Brilliant Black Minds, MLT, and the communities that shaped my voice.',
  },
  {
    title: 'Multicloud-in-the-making',
    platform: 'Medium (coming soon)',
    icon: <FaMedium />,
    link: 'https://medium.com/@havcker243',
    description: 'Drafting lessons from deploying on AWS, Firebase, and GCP as a student engineer.',
  },
];

const showComingSoon = true;

const Blogs: React.FC = () => {
  const hasPosts = !showComingSoon && blogs.length > 0;

  return (
    <div className="blogs-container">
      <h2 className="blogs-title">Writing & reflections</h2>
      <p className="blogs-intro">Where I unpack the builds, fellowships, and community work behind this portfolio.</p>

      {hasPosts ? (
        <div className="blogs-grid">
          {blogs.map((blog, index) => (
            <a
              href={blog.link}
              key={index}
              target="_blank"
              rel="noopener noreferrer"
              className="blog-card"
              style={{ '--delay': `${index * 0.2}s` } as React.CSSProperties}
            >
              <div className="blog-icon animated-icon">{blog.icon}</div>
              <div className="blog-info animated-text">
                <h3 className="blog-title">{blog.title}</h3>
                <p className="blog-description">{blog.description}</p>
                <span className="blog-platform">{blog.platform}</span>
              </div>
            </a>
          ))}
        </div>
      ) : (
        <div className="blogs-placeholder">
          <p>Fresh blogs and LinkedIn write-ups are on the way.</p>
          <p>I'm packaging Build in Public recaps, fellowship takeaways, and design journals next.</p>
          <a
            href="https://www.linkedin.com/in/oludolapo-adegbesan-3168a7218/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Follow on LinkedIn for live updates
          </a>
        </div>
      )}
    </div>
  );
};

export default Blogs;
