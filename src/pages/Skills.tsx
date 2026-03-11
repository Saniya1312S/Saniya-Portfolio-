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
    category: 'Programming Languages',
    description: 'Primary language for AI/ML projects, data analysis, deep learning models, and research implementations.',
    icon: 'FaPython',
  },
  {
    name: 'C',
    category: 'Programming Languages',
    description: 'Strong foundation in systems programming, algorithms, and data structures.',
    icon: 'FaJava',
  },
  {
    name: 'HTML & SQL',
    category: 'Programming Languages',
    description: 'Web development fundamentals and database querying for data-driven applications.',
    icon: 'SiHtml5',
  },
  {
    name: 'Machine Learning & AI',
    category: 'Technical Skills',
    description: 'Building ML models for healthcare (frozen shoulder measurement, lung disease classification) and financial data analysis.',
    icon: 'FaPython',
  },
  {
    name: 'Data Visualization',
    category: 'Technical Skills',
    description: 'Creating insightful visualizations using Tableau, Power BI, and Python libraries to communicate data-driven findings.',
    icon: 'SiGooglecloud',
  },
  {
    name: 'Computer Vision',
    category: 'Technical Skills',
    description: 'Real-time systems using MediaPipe and deep learning for angle measurement and pattern recognition in healthcare.',
    icon: 'FaReact',
  },
  {
    name: 'Google Colab & Kaggle',
    category: 'Developer Tools',
    description: 'Cloud-based environments for rapid prototyping, model training, and collaborative data science experiments.',
    icon: 'SiGooglecloud',
  },
  {
    name: 'Tableau & Power BI',
    category: 'Developer Tools',
    description: 'Interactive dashboards and reports for data visualization, business intelligence, and analytical storytelling.',
    icon: 'SiGooglecloud',
  },
  {
    name: 'VS Code & Anaconda',
    category: 'Developer Tools',
    description: 'Primary development environments for Python projects, Jupyter notebooks, and package management.',
    icon: 'FaGitAlt',
  },
  {
    name: 'Leadership & Communication',
    category: 'Soft Skills',
    description: 'Data Science Lead at GDSC training 100+ students, Vice President of Student Council organizing 50+ events, and 11 years of NGO volunteering.',
    icon: 'FaGitAlt',
  },
  {
    name: 'Problem-Solving & Teamwork',
    category: 'Soft Skills',
    description: 'Collaborative research with IIT Kharagpur, cross-functional project development, and hackathon participation.',
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
