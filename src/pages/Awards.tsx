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
    title: '$8,275 AI Internship Scholarship',
    org: 'University of California, Berkeley / DMIHER',
    year: '2025',
    description: 'Awarded a scholarship by DMIHER for the AI Internship Program at the University of California, Berkeley.',
  },
  {
    title: 'Runner-up, Medico Engino Hackathon',
    org: 'Hackathon',
    year: '2024',
    description: 'Secured runner-up position in the Medico Engino Hackathon with an innovative healthcare solution.',
  },
  {
    title: 'Selected as SAARTHI',
    org: 'UGC, India',
    year: '2024',
    description: 'Selected as "SAARTHI" representing the institute at Central level under UGC, India.',
  },
  {
    title: 'AI Bootcamp Facilitator',
    org: 'FEAT, DMIHER',
    year: '2024',
    description: 'Facilitated AI bootcamp for students, teaching machine learning basics, AI tools, and practical applications while mentoring participants in real-world AI projects.',
  },
  {
    title: 'Data Science Lead, GDSC',
    org: 'Google Developer Student Club',
    year: '2023 - 2024',
    description: 'Conducted sessions, trained 100+ students, and led the Data Science team in exploring Cloud, AI, and ML technologies.',
  },
  {
    title: 'Vice President, Student Council',
    org: 'FEAT, DMIHER',
    year: '2023 - 2024',
    description: 'Organized 50+ technical and non-technical college events as Vice President of the Student Council.',
  },
  {
    title: 'Volunteer, Sanskar Shibir NGO',
    org: 'Sanskar Shibir NGO',
    year: '2013 - Present',
    description: 'Volunteering for 11 years in an NGO focused on education awareness in rural areas, impacting 500+ students.',
  },
  {
    title: '8 Published Research Papers',
    org: 'IEEE, AIP, AIMS Bioengineering',
    year: '2023 - 2025',
    description: 'Published research in Human-Computer Interaction in Healthcare, 5G/6G AI Systems, Early Disease Detection, Blockchain in EHR, Cloud in Healthcare, Heart-Attack Prediction, and Shoulder Angle Measurement.',
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
