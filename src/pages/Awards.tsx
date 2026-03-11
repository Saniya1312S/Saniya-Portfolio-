import React from 'react';
import './Awards.css';

interface Award {
  title: string;
  org: string;
  year: string;
  description: string;
}

const awards: Award[] = [
  {
    title: '$8,500 UC Berkeley AI Internship Scholarship',
    org: 'University of California, Berkeley / DMIHER',
    year: '2025',
    description: 'Received a $8,500 merit-based scholarship for the UC Berkeley AI Internship program, working on GenAI, Agentic AI, and applied AI development.',
  },
  {
    title: 'ISRO R&D Project Presentation',
    org: 'ISRO (National Remote Sensing Centre)',
    year: '2025',
    description: 'Got the opportunity to present AI-based satellite image analysis work to the Director of ISRO and senior scientists as part of an ongoing crucial R&D project.',
  },
  {
    title: 'Runner-up, Medico Engino Hackathon',
    org: 'Hackathon',
    year: '2024',
    description: 'Secured runner-up position with SignAssistant, a real-time ISL gesture translation system using MediaPipe and ML.',
  },
  {
    title: 'Google Advanced Data Analytics',
    org: 'Google / Coursera',
    year: '2024',
    description: 'Completed Google Advanced Data Analytics professional certificate covering statistical analysis, regression, and machine learning.',
  },
  {
    title: 'DL for Healthcare, Cloud, IoT & Edge ML (NPTEL)',
    org: 'NPTEL',
    year: '2024',
    description: 'Certifications in Deep Learning for Healthcare, Cloud Computing, and IoT & Edge ML from NPTEL.',
  },
  {
    title: 'Data Science Coordinator, GDG',
    org: 'Google Developer Group',
    year: '2023 - 2024',
    description: 'Coordinated the Data Science vertical at Google Developer Group (GDG), conducting sessions and leading the team in exploring Cloud, AI, and ML technologies.',
  },
  {
    title: 'Executive Member, Student Council',
    org: 'FEAT, DMIHER',
    year: '2023 - 2024',
    description: 'Organized 50+ technical and non-technical college events as Executive Member of the Student Council.',
  },
  {
    title: 'Volunteer, NGO',
    org: 'NGO',
    year: '2013 - Present',
    description: 'Volunteering for 12+ years in an NGO focused on education awareness in rural areas, impacting hundreds of students.',
  },
  {
    title: '20+ Published Research Papers',
    org: 'IEEE, AIP, AIMS Bioengineering',
    year: '2023 - 2026',
    description: 'Authored 20+ research publications spanning healthcare AI, 5G/6G systems, blockchain in EHR, cloud computing, and more.',
  },
];

const Awards: React.FC = () => {
  return (
    <div className="awards-container">
      <div className="awards-header">
        <h2>Achievements & Community</h2>
        <p>Awards, leadership roles, and community initiatives that define my journey in AI, research, and education.</p>
      </div>
      <div className="awards-grid">
        {awards.map((award, index) => (
          <div key={index} className="award-card" style={{ animationDelay: `${index * 0.1}s` }}>
            <div className="award-meta">
              <span className="award-year">{award.year}</span>
              <span className="award-org">{award.org}</span>
            </div>
            <h3 className="award-title">{award.title}</h3>
            <p className="award-description">{award.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Awards;
