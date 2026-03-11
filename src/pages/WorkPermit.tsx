import React from 'react';
import './WorkPermit.css';
import { WorkPermit as IWorkPermit } from '../types';

const workPermitData: IWorkPermit = {
  visaStatus: 'Indian Citizen - Open to Opportunities',
  expiryDate: new Date('2026-12-31'),
  summary:
    'I am a BTech student in Artificial Intelligence & Data Science at FEAT, DMIHER (DU), Wardha, graduating in 2026. Currently engaged in research at IIT Kharagpur and AI/ML work at Deeptimaan Info System.',
  additionalInfo:
    'Open to internships, research collaborations, and full-time roles in AI, Data Science, and Machine Learning. Available for remote and on-site positions across India and internationally.',
};

const WorkPermit: React.FC = () => {
  return (
    <div className="work-permit-container">
      <div className="work-permit-card">
        <h2 className="work-permit-headline">Work Authorization</h2>
        <p className="work-permit-summary">{workPermitData.summary}</p>
        <p className="work-permit-summary">
          I'm currently a <strong>{workPermitData.visaStatus}</strong>, actively seeking roles in AI and Data Science. Expected graduation is{' '}
          <strong>{new Date(workPermitData.expiryDate).toLocaleDateString()}</strong>, with ongoing research experience and multiple publications.
        </p>
        <p className="additional-info">{workPermitData.additionalInfo}</p>
      </div>
    </div>
  );
};

export default WorkPermit;
