import React from 'react';
import './Recommendations.css';

const references = [
  {
    name: 'Dr. K. T. V. Reddy',
    title: 'Dean, Faculty of Engineering & Technology',
    affiliation: 'FEAT, DMIHER, Sawangi, Maharashtra, India 442001',
    email: 'dean.feat@dmiher.edu.in',
  },
  {
    name: 'Dr. Prateek Verma',
    title: 'Head of Research and Development',
    affiliation: 'Department of AI & ML, FEAT, DMIHER, Sawangi, Maharashtra, India 442001',
    email: 'prateekv.feat@dmiher.edu.in',
  },
  {
    name: 'Dr. Praveen Kumar',
    title: 'Mentor of Research and Development',
    affiliation: 'Department of CS & Medical Engineering, FEAT, DMIHER, Sawangi, Maharashtra, India 442001',
    email: 'praveenk.feat@dmiher.edu.in',
  },
];

const Recommendations: React.FC = () => {
  return (
    <div className="recommendations-shell">
      <header className="recommendations-hero">
        <p className="eyebrow">Trusted mentors & guides</p>
        <h1>References</h1>
        <p>Professors and research mentors who can speak to my work, dedication, and contributions.</p>
      </header>

      <div className="letters-grid">
        {references.map((ref) => (
          <article key={ref.email} className="letter-card">
            <div className="letter-frame" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'linear-gradient(135deg, #1a1a2e 0%, #16213e 50%, #0f3460 100%)', minHeight: '200px', padding: '2rem', textAlign: 'center' }}>
              <div>
                <h2 style={{ color: '#e94560', margin: '0 0 0.5rem 0', fontSize: '1.5rem' }}>{ref.name}</h2>
                <p style={{ color: '#eee', margin: '0', fontSize: '0.95rem' }}>{ref.title}</p>
              </div>
            </div>
            <footer className="letter-meta">
              <h3>{ref.name}</h3>
              <p>{ref.title}</p>
              <p style={{ fontSize: '0.85rem', opacity: 0.8 }}>{ref.affiliation}</p>
              <a
                href={`mailto:${ref.email}`}
                className="contact-ref-link"
              >
                {ref.email}
              </a>
            </footer>
          </article>
        ))}
      </div>
    </div>
  );
};

export default Recommendations;
