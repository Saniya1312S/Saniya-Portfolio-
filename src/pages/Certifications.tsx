import React, { useEffect, useState } from 'react';
import './Certifications.css';
import { FaExternalLinkAlt, FaUniversity } from 'react-icons/fa';
import { SiUdemy, SiCoursera, SiIeee } from 'react-icons/si';
import { Certification } from '../types';
import { getCertifications } from '../queries/getCertifications';

const iconData: { [key: string]: JSX.Element } = {
  udemy: <SiUdemy />,
  coursera: <SiCoursera />,
  ieee: <SiIeee />,
  university: <FaUniversity />,
};

const Certifications: React.FC = () => {
  const [certifications, setCertifications] = useState<Certification[]>([]);
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    let ignore = false;
    async function fetchCertifications() {
      try {
        const data = await getCertifications();
        if (!ignore) {
          setCertifications(data);
        }
      } catch (error) {
        console.error('Unable to load certifications', error);
      } finally {
        if (!ignore) {
          setLoading(false);
        }
      }
    }

    fetchCertifications();
    return () => {
      ignore = true;
    };
  }, []);

  const showPlaceholder = !isLoading && certifications.length === 0;

  return (
    <div className="certifications-container">
      <h2 className="certifications-title">Certifications & Badges</h2>
      {isLoading && <p className="certifications-status">Loading credentials...</p>}
      {showPlaceholder && (
        <div className="certifications-placeholder">
          <p>Verified badges and nano-degrees are being curated.</p>
          <p>Check back soon or peek at my LinkedIn for the latest completions.</p>
          <a
            href="https://in.linkedin.com/in/saniya-saratkar-1624ba250"
            target="_blank"
            rel="noopener noreferrer"
          >
            Visit LinkedIn
          </a>
        </div>
      )}

      {!showPlaceholder && certifications.length > 0 && (
        <div className="certifications-grid">
          {certifications.map((cert, index) => (
            <a
              href={cert.link}
              key={index}
              target="_blank"
              rel="noopener noreferrer"
              className="certification-card"
              style={{ '--delay': `${index * 0.2}s` } as React.CSSProperties}
            >
              <div className="certification-content">
                <div className="certification-icon">{iconData[cert.iconName] || <FaUniversity />}</div>
                <h3>{cert.title}</h3>
                <p>{cert.issuer}</p>
                {cert.issuedDate && <span className="issued-date">Issued {cert.issuedDate}</span>}
              </div>
              <div className="certification-link animated-icon">
                <FaExternalLinkAlt />
              </div>
            </a>
          ))}
        </div>
      )}
    </div>
  );
};

export default Certifications;
