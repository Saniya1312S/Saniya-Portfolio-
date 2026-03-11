import React, { useEffect, useMemo, useState } from 'react';
import './Skills.css';

import { FaReact, FaNodeJs, FaAws, FaDocker, FaGitAlt, FaJava, FaPython } from 'react-icons/fa';
import { SiRubyonrails, SiTypescript, SiPostgresql, SiMysql, SiKubernetes, SiGooglecloud, SiSpringboot, SiPhp, SiNetlify, SiHeroku, SiHtml5, SiCss3, SiRabbitmq, SiImessage } from 'react-icons/si';
import { Skill } from '../types';
import { getSkills } from '../queries/getSkills';

const iconMap: { [key: string]: JSX.Element } = {
  SiRubyonrails: <SiRubyonrails />,
  FaNodeJs: <FaNodeJs />,
  SiSpringboot: <SiSpringboot />,
  FaJava: <FaJava />,
  SiPhp: <SiPhp />,
  FaReact: <FaReact />,
  SiTypescript: <SiTypescript />,
  FaAws: <FaAws />,
  FaDocker: <FaDocker />,
  SiPostgresql: <SiPostgresql />,
  SiMysql: <SiMysql />,
  SiKubernetes: <SiKubernetes />,
  SiGooglecloud: <SiGooglecloud />,
  SiHeroku: <SiHeroku />,
  SiNetlify: <SiNetlify />,
  SiRabbitmq: <SiRabbitmq />,
  SiImessage: <SiImessage />,
  FaPython: <FaPython />,
  FaGitAlt: <FaGitAlt />,
  SiHtml5: <SiHtml5 />,
  SiCss3: <SiCss3 />,
};

const fallbackSkills: Skill[] = [
  {
    name: 'Python',
    category: 'Languages & Libraries',
    description: 'Primary language for AI/ML projects, data analysis, deep learning models, and research implementations.',
    icon: 'FaPython',
  },
  {
    name: 'SQL',
    category: 'Languages & Libraries',
    description: 'Database querying and management for data-driven applications and analytics.',
    icon: 'SiMysql',
  },
  {
    name: 'NumPy, Pandas, Matplotlib, Seaborn',
    category: 'Languages & Libraries',
    description: 'Core data science libraries for numerical computing, data manipulation, and visualization.',
    icon: 'FaPython',
  },
  {
    name: 'Scikit-learn & TensorFlow',
    category: 'Languages & Libraries',
    description: 'Machine learning and deep learning frameworks for building and training AI models.',
    icon: 'FaPython',
  },
  {
    name: 'GenAI, LLM & RAG',
    category: 'Data Science',
    description: 'Building generative AI applications with Large Language Models, Retrieval-Augmented Generation pipelines, and transformer architectures.',
    icon: 'FaPython',
  },
  {
    name: 'LSTM, CNN & Random Forest',
    category: 'Data Science',
    description: 'Deep learning and classical ML models for sequence prediction, image classification, and ensemble-based decision making.',
    icon: 'FaPython',
  },
  {
    name: 'Time Series & XGBoost',
    category: 'Data Science',
    description: 'ARIMA, Chronos, and gradient boosting models for forecasting and structured data problems.',
    icon: 'FaPython',
  },
  {
    name: 'Computer Vision',
    category: 'Data Science',
    description: 'Real-time systems using MediaPipe and deep learning for gesture recognition, satellite image analysis, and pattern recognition.',
    icon: 'FaReact',
  },
  {
    name: 'Google Cloud Platform',
    category: 'Cloud & Tools',
    description: 'Cloud infrastructure for deploying AI models, data pipelines, and scalable applications.',
    icon: 'SiGooglecloud',
  },
  {
    name: 'Power BI & GitHub',
    category: 'Cloud & Tools',
    description: 'Business intelligence dashboards for data visualization and version control for collaborative development.',
    icon: 'FaGitAlt',
  },
  {
    name: 'n8n, Postman & JMeter',
    category: 'Cloud & Tools',
    description: 'Workflow automation, API testing, and performance testing tools for end-to-end application development.',
    icon: 'FaDocker',
  },
  {
    name: 'Leadership & Community',
    category: 'Soft Skills',
    description: 'Executive Member (Student Council), Data Science Coordinator at GDG; organized 50+ events and volunteered with NGO for 12+ years.',
    icon: 'FaGitAlt',
  },
  {
    name: 'Problem-Solving & Research',
    category: 'Soft Skills',
    description: 'Collaborative research with ISRO, IIT Kharagpur & UC Berkeley; 20+ research publications and hackathon runner-up.',
    icon: 'SiImessage',
  },
];

const Skills: React.FC = () => {
  const [skillsData, setSkillsData] = useState<Skill[]>(fallbackSkills);

  useEffect(() => {
    let ignore = false;
    async function loadSkills() {
      try {
        const remoteSkills = await getSkills();
        if (!ignore && remoteSkills.length) {
          setSkillsData(remoteSkills);
        }
      } catch (error) {
        console.error('Failed to load skills from Supabase', error);
      }
    }
    loadSkills();
    return () => {
      ignore = true;
    };
  }, []);

  const skillsByCategory = useMemo(() => {
    return skillsData.reduce<Record<string, Skill[]>>((acc, skill) => {
      if (!acc[skill.category]) acc[skill.category] = [];
      acc[skill.category].push(skill);
      return acc;
    }, {});
  }, [skillsData]);


  return (
    <div className="skills-container">
      {Object.keys(skillsByCategory).map((category, index) => (
        <div key={index} className="skill-category">
          <h3 className="category-title">{category}</h3>
          <div className="skills-grid">
            {skillsByCategory[category].map((skill: any, idx: number) => (
              <div key={idx} className="skill-card">
                <div className="icon">{iconMap[skill.icon] || <FaReact />}</div>
                <h3 className="skill-name">
                  {skill.name.split('').map((letter: any, i: number) => (
                    <span key={i} className="letter" style={{ animationDelay: `${i * 0.05}s` }}>
                      {letter}
                    </span>
                  ))}
                </h3>
                <p className="skill-description">{skill.description}</p>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Skills;
