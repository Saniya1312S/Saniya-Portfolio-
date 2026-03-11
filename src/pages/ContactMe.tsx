import React from 'react';
import './ContactMe.css';
import profilePic from '../images/saniya-profile.jpg';
import { FaCoffee, FaLinkedin, FaEnvelope, FaPhone } from 'react-icons/fa';
import { ContactMe as IContactMe } from '../types';

const contactInfo: IContactMe = {
  profilePicture: { url: profilePic },
  name: 'Saniya Saratkar',
  title: 'AI & Data Science Student | Research Intern',
  summary:
    'Third-year BTech student in AI and Data Science at DMIHER, passionate about solving real-world problems through AI-driven solutions. Experienced in ESG research on AI models for financial data analysis at IIT Kharagpur, edge device AI development at Deeptimaan Info System, and real-time computer vision systems. Published 8 research papers in IEEE, AIP, and AIMS Bioengineering journals spanning healthcare AI, 5G/6G systems, blockchain in EHR, and cloud computing.',
  companyUniversity: 'FEAT, DMIHER (DU), Wardha · BTech AI & Data Science · 2026',
  linkedinLink: 'https://in.linkedin.com/in/saniya-saratkar-1624ba250',
  email: 'saniyasaratkar1312@gmail.com',
  phoneNumber: '+917276253304',
};

const ContactMe: React.FC = () => {
  return (
    <div className="contact-container">
      <section className="contact-hero">
        <p className="hero-eyebrow">Let's Connect</p>
        <h1>AI & Data Science Student | Research Intern</h1>
        <p className="hero-copy">{contactInfo.summary}</p>
        <div className="hero-buttons">
          <a
            href={contactInfo.linkedinLink}
            target="_blank"
            rel="noopener noreferrer"
            className="hero-button primary"
          >
            <FaLinkedin /> Connect on LinkedIn
          </a>
        </div>
      </section>

      <section className="contact-grid">
        <div className="linkedin-badge-custom">
          <img src={contactInfo.profilePicture.url} alt="Saniya Saratkar" className="badge-avatar" />
          <div className="badge-content">
            <h3 className="badge-name">{contactInfo.name}</h3>
            <p className="badge-title">{contactInfo.title}</p>
            <p className="badge-description">{contactInfo.summary}</p>
            <p className="badge-company">{contactInfo.companyUniversity}</p>
            <a
              href={contactInfo.linkedinLink}
              target="_blank"
              rel="noopener noreferrer"
              className="badge-link"
            >
              <FaLinkedin className="linkedin-icon" /> View Profile
            </a>
          </div>
        </div>

        <div className="contact-details">
          <div className="contact-item">
            <FaEnvelope className="contact-icon" />
            <a
              href={`mailto:${contactInfo.email}`}
              className="contact-link"
            >
              {contactInfo.email}
            </a>
          </div>
          <div className="contact-item">
            <FaPhone className="contact-icon" />
            <a
              href={`tel:${contactInfo.phoneNumber}`}
              className="contact-link"
            >
              {contactInfo.phoneNumber}
            </a>
          </div>
          <div className="contact-item">
            <FaLinkedin className="contact-icon" />
            <a
              href={contactInfo.linkedinLink}
              target="_blank"
              rel="noopener noreferrer"
              className="contact-link"
            >
              Message me on LinkedIn
            </a>
          </div>
          <div className="contact-fun">
            <p>Prefer IRL? Let&rsquo;s grab a coffee &#9749;</p>
            <FaCoffee className="coffee-icon" />
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactMe;
