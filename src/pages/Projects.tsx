import React, { useEffect, useMemo, useState } from 'react';
import './Projects.css';
import { FaReact, FaNodeJs, FaAws, FaDatabase, FaDocker, FaAngular, FaGithub, FaGitlab, FaGoogle, FaJava, FaJenkins, FaMicrosoft, FaPython, FaVuejs } from 'react-icons/fa';
import { SiRubyonrails, SiPostgresql, SiMongodb, SiMaterialdesign, SiHtml5, SiCss3, SiJquery, SiAwsamplify, SiFirebase, SiTerraform, SiArgo, SiCplusplus, SiFlask, SiLeaflet, SiGooglemaps, SiSupabase, SiOpenai, SiTailwindcss, SiTypescript, SiFastapi, SiTensorflow, SiOpencv, SiCsharp, SiDotnet } from 'react-icons/si';
import { GrDeploy, GrKubernetes } from "react-icons/gr";

const githubUsername = 'saniyasaratkar';
const githubToken = process.env.REACT_APP_GITHUB_TOKEN;
const githubApiHeaders: HeadersInit = githubToken
  ? {
    Accept: 'application/vnd.github+json',
    Authorization: `Bearer ${githubToken}`,
  }
  : {
    Accept: 'application/vnd.github+json',
  };
const githubRawHeaders: HeadersInit = githubToken
  ? {
    Accept: 'text/plain',
    Authorization: `Bearer ${githubToken}`,
  }
  : { Accept: 'text/plain' };

const techIcons: { [key: string]: JSX.Element } = {
  "ReactJS": <FaReact />,
  "NodeJS": <FaNodeJs />,
  "AWS": <FaAws />,
  "PostgreSQL": <SiPostgresql />,
  "MongoDB": <SiMongodb />,
  "Ruby On Rails": <SiRubyonrails />,
  "Material UI": <SiMaterialdesign />,
  "HTML5": <SiHtml5 />,
  "CSS3": <SiCss3 />,
  "TypeScript": <SiTypescript />,
  "jQuery": <SiJquery />,
  "AWS-ECS": <SiAwsamplify />,
  'Cognito': <FaAws />,
  'Lambda': <FaAws />,
  'ECS': <FaAws />,
  'Jenkins': <FaJenkins />,
  'Docker': <FaDocker />,
  'GraphQL': <FaDatabase />,
  'CI/CD': <FaGitlab />,
  'GitLab': <FaGitlab />,
  'GitHub': <FaGithub />,
  'Heroku': <GrDeploy />,
  'Netlify': <GrDeploy />,
  'Firebase': <SiFirebase />,
  'GCP': <FaGoogle />,
  'Azure': <FaMicrosoft />,
  'Kubernetes': <GrKubernetes />,
  'Terraform': <SiTerraform />,
  'ArgoCD': <SiArgo />,
  'Java': <FaJava />,
  'Spring Boot': <FaJava />,
  'Python': <FaPython />,
  'Node.js': <FaNodeJs />,
  'Express.js': <FaNodeJs />,
  'Hibernate': <FaJava />,
  'Maven': <FaJava />,
  'Gradle': <FaJava />,
  'JUnit': <FaJava />,
  'Mockito': <FaJava />,
  'Jest': <FaReact />,
  'React': <FaReact />,
  'Angular': <FaAngular />,
  'Vue.js': <FaVuejs />,
  'Next.js': <FaReact />,
  'Gatsby': <FaReact />,
  'Nuxt.js': <FaVuejs />,
  'Redux': <FaReact />,
  'Vuex': <FaVuejs />,
  'Tailwind CSS': <SiTailwindcss />,
  'Bootstrap': <SiCss3 />,
  'JQuery': <SiJquery />,
  'C/C++': <SiCplusplus />,
  'Leaflet': <SiLeaflet />,
  'Google Maps': <SiGooglemaps />,
  'Flask.py': <SiFlask />,
  'Supabase': <SiSupabase />,
  'OpenAI': <SiOpenai />,
  'FastAPI': <SiFastapi />,
  'TensorFlow': <SiTensorflow />,
  'OpenCV': <SiOpencv />,
  'C#': <SiCsharp />,
  '.NET': <SiDotnet />,
  'MediaPipe': <FaPython />,
  'Deep Learning': <SiTensorflow />,
  'Machine Learning': <FaPython />,
  'Computer Vision': <SiOpencv />,
  'IoT': <FaDatabase />,
};

interface SpotlightProjectConfig {
  title: string;
  repoSlug: string;
  summary: string;
  techUsed: string[];
  githubUrl: string;
  image: {
    url: string;
    alt?: string;
  };
  liveUrl?: string;
}

interface SpotlightProject extends SpotlightProjectConfig {
  description: string;
  updatedAt?: string | null;
  stars?: number | null;
  topics?: string[];
}

const curatedProjects: SpotlightProjectConfig[] = [
  {
    title: 'SignAssistant – Real-Time ISL Translator',
    repoSlug: 'sign-assistant',
    summary:
      'Built a real-time AI system translating ISL gestures into text and speech for signer–non-signer communication. Extracted MediaPipe keypoints and trained Random Forest, LSTM and CNN models with hyperparameter tuning for gesture classification; integrated Gemini API for multilingual responses. Runner-up at MedicoEngino Hackathon.',
    techUsed: ['Python', 'MediaPipe', 'Machine Learning', 'TensorFlow'],
    githubUrl: `https://github.com/${githubUsername}`,
    image: {
      url: 'https://images.unsplash.com/photo-1589254065878-42c014d074b1?auto=format&fit=crop&w=1200&q=80',
      alt: 'Sign language AI translation system',
    },
  },
  {
    title: 'MediEvidence – RAG Clinical Evidence Assistant',
    repoSlug: 'medi-evidence',
    summary:
      'Built a domain-specific AI assistant to query medical research papers & generate cited answers using an end-to-end RAG pipeline with Sentence-Transformer embeddings, FAISS, BM25 hybrid retrieval & cross-encoder reranking. Achieved 87.3% retrieval precision while reducing hallucinations through grounded retrieval.',
    techUsed: ['Python', 'OpenAI', 'Machine Learning', 'Deep Learning'],
    githubUrl: `https://github.com/${githubUsername}`,
    image: {
      url: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=1200&q=80',
      alt: 'Medical AI research assistant',
    },
  },
  {
    title: 'AI Driven Frozen Shoulder Angle Measurement',
    repoSlug: 'frozen-shoulder-angle',
    summary:
      'Developed a real-time system for measuring shoulder angles using MediaPipe, computer vision, and machine learning to aid personalized therapy.',
    techUsed: ['Python', 'MediaPipe', 'Computer Vision', 'Machine Learning'],
    githubUrl: `https://github.com/${githubUsername}`,
    image: {
      url: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=1200&q=80',
      alt: 'AI-driven shoulder angle measurement system',
    },
  },
  {
    title: 'Sound-Based Lung Disease Classification',
    repoSlug: 'lung-disease-classification',
    summary:
      'Developed an efficient system for classifying lung diseases based on sound patterns using deep learning techniques, enabling early diagnosis and improved patient care.',
    techUsed: ['Python', 'Deep Learning', 'TensorFlow', 'Machine Learning'],
    githubUrl: `https://github.com/${githubUsername}`,
    image: {
      url: 'https://images.unsplash.com/photo-1559757175-5700dde675bc?auto=format&fit=crop&w=1200&q=80',
      alt: 'Deep learning lung disease classification',
    },
  },
];

const githubShowcaseUrl = `https://github.com/${githubUsername}?tab=repositories`;

interface GitHubRepo {
  id: number;
  name: string;
  full_name: string;
  description: string | null;
  language: string | null;
  html_url: string;
  homepage?: string | null;
  stargazers_count: number;
  forks_count: number;
  pushed_at: string;
  topics?: string[];
  fork: boolean;
  archived: boolean;
  default_branch?: string;
}

const formatUpdatedDate = (value?: string | null) => {
  if (!value) return null;
  return new Date(value).toLocaleDateString();
};

interface ReadmeDetails {
  summary?: string;
  image?: {
    url: string;
    alt?: string;
  };
}

const extractSummaryFromMarkdown = (markdown: string): string | null => {
  const sanitized = markdown
    .replace(/```[\s\S]*?```/g, '')
    .replace(/~~~[\s\S]*?~~~/g, '');
  const blocks = sanitized.split(/\n\s*\n/).map(block => block.trim()).filter(Boolean);
  for (const block of blocks) {
    if (!block) continue;
    if (block.startsWith('#') || block.startsWith('![') || block.startsWith('<') || block.startsWith('|')) {
      continue;
    }
    return block.replace(/\r?\n/g, ' ');
  }
  return null;
};

const extractFirstImageFromMarkdown = (markdown: string, basePath: string) => {
  const imageRegex = /!\[([^\]]*)\]\(([^)\s]+)(?:\s+"[^"]*")?\)/m;
  const match = imageRegex.exec(markdown);
  if (!match) return null;
  const [, altText, rawUrl] = match;
  const normalizedUrl = rawUrl.startsWith('http')
    ? rawUrl
    : `${basePath}${rawUrl.replace(/^\.?\//, '')}`;
  return {
    url: normalizedUrl,
    alt: altText || undefined,
  };
};

const Projects: React.FC = () => {
  const [repos, setRepos] = useState<GitHubRepo[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [projectReadmes, setProjectReadmes] = useState<Record<string, ReadmeDetails>>({});

  useEffect(() => {
    async function fetchRepos() {
      try {
        setLoading(true);
        const response = await fetch(`https://api.github.com/users/${githubUsername}/repos?per_page=100&sort=updated`, {
          headers: githubApiHeaders,
        });
        if (!response.ok) {
          throw new Error('GitHub API rate limit reached. Please try again in a few minutes.');
        }
        const data: GitHubRepo[] = await response.json();
        const filtered = data
          .filter(repo => !repo.fork && !repo.archived)
          .sort((a, b) => new Date(b.pushed_at).getTime() - new Date(a.pushed_at).getTime());
        setRepos(filtered);
      } catch (err: any) {
        setError(err.message || 'Unable to load repositories right now.');
      } finally {
        setLoading(false);
      }
    }

    fetchRepos();
  }, []);

  const repoLookup = useMemo(() => {
    return repos.reduce<Record<string, GitHubRepo>>((acc, repo) => {
      acc[repo.name.toLowerCase()] = repo;
      return acc;
    }, {});
  }, [repos]);

  useEffect(() => {
    if (!repos.length) return;
    let cancelled = false;
    async function hydrateReadmes() {
      const results = await Promise.all(
        curatedProjects.map(async project => {
          const repoMatch = repoLookup[project.repoSlug.toLowerCase()];
          if (!repoMatch) return null;
          const branch = repoMatch.default_branch || 'main';
          try {
            const response = await fetch(
              `https://raw.githubusercontent.com/${githubUsername}/${project.repoSlug}/${branch}/README.md`,
              { headers: githubRawHeaders }
            );
            if (!response.ok) return null;
            const markdown = await response.text();
            const summary = extractSummaryFromMarkdown(markdown) || undefined;
            const image = extractFirstImageFromMarkdown(
              markdown,
              `https://raw.githubusercontent.com/${githubUsername}/${project.repoSlug}/${branch}/`
            ) || undefined;
            return {
              slug: project.repoSlug.toLowerCase(),
              details: { summary, image },
            };
          } catch {
            return null;
          }
        })
      );
      if (cancelled) return;
      const nextDetails: Record<string, ReadmeDetails> = {};
      results.forEach(entry => {
        if (!entry) return;
        nextDetails[entry.slug] = entry.details;
      });
      setProjectReadmes(nextDetails);
    }
    hydrateReadmes();
    return () => {
      cancelled = true;
    };
  }, [repos, repoLookup]);

  const curatedRepoNames = useMemo(() => {
    return new Set(curatedProjects.map(project => project.repoSlug.toLowerCase()));
  }, []);

  const spotlightProjects = useMemo<SpotlightProject[]>(() => {
    return curatedProjects.map(project => {
      const slug = project.repoSlug.toLowerCase();
      const repoMatch = repoLookup[slug];
      const readmeDetails = projectReadmes[slug];
      return {
        ...project,
        description: readmeDetails?.summary || repoMatch?.description || project.summary,
        updatedAt: repoMatch?.pushed_at ?? null,
        stars: repoMatch?.stargazers_count ?? null,
        topics: repoMatch?.topics ?? [],
        liveUrl: repoMatch?.homepage || project.liveUrl || undefined,
        githubUrl: repoMatch?.html_url ?? project.githubUrl,
        image: readmeDetails?.image ?? project.image,
      };
    });
  }, [projectReadmes, repoLookup]);

  const repoSamples = useMemo(() => {
    return repos.filter(repo => !curatedRepoNames.has(repo.name.toLowerCase())).slice(0, 9);
  }, [repos, curatedRepoNames]);

  return (
    <div className="projects-container">
      <div className="projects-cta">
        <div>
          <h2>Research & Projects</h2>
          <p>AI-driven solutions in healthcare, deep learning, and data science.</p>
        </div>
        <a href={githubShowcaseUrl} target="_blank" rel="noopener noreferrer" className="github-link">
          <FaGithub /> Explore GitHub
        </a>
      </div>
      <section className="project-section">
        <h3>Spotlight Builds</h3>
        <div className="projects-grid">
          {spotlightProjects.map((project, index) => (
            <article
              key={project.title}
              className="project-card"
              style={{ '--delay': `${index * 0.07}s` } as React.CSSProperties}
            >
              <div className="project-card-media">
                <img src={project.image.url} alt={project.image.alt || project.title} className="project-image" />
                {project.updatedAt && (
                  <span className="project-chip">Updated {formatUpdatedDate(project.updatedAt)}</span>
                )}
              </div>
              <div className="project-details">
                <div className="project-card-header">
                  <h3>{project.title}</h3>
                  {typeof project.stars === 'number' && (
                    <span className="project-meta">★ {project.stars}</span>
                  )}
                </div>
                <p>{project.description}</p>
                <div className="tech-used">
                  {project.techUsed.map((tech, i) => (
                    <span key={`${project.title}-${tech}-${i}`} className="tech-badge">
                      {techIcons[tech] || '[tool]'} {tech}
                    </span>
                  ))}
                </div>
                <div className="project-links">
                  <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                    GitHub
                  </a>
                  {project.liveUrl && (
                    <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="ghost">
                      Live Site
                    </a>
                  )}
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="project-section">
        <h3>Latest from GitHub</h3>
        {loading && <p className="projects-status">Loading GitHub repositories...</p>}
        {error && <p className="projects-status error">{error}</p>}
        <div className="repo-grid">
          {repoSamples.map(repo => (
            <div key={repo.id} className="repo-card">
              <div className="repo-card-header">
                <h4>{repo.name}</h4>
                {repo.language && <span className="language-pill">{repo.language}</span>}
              </div>
              <p className="repo-description">{repo.description || 'No description provided yet.'}</p>
              {repo.topics && repo.topics.length > 0 && (
                <div className="repo-topics">
                  {repo.topics.slice(0, 4).map(topic => (
                    <span key={topic}>{topic}</span>
                  ))}
                </div>
              )}
              <div className="repo-meta">
                <span>★ {repo.stargazers_count}</span>
                <span>Forks {repo.forks_count}</span>
                <span>Updated {new Date(repo.pushed_at).toLocaleDateString()}</span>
              </div>
              <div className="repo-links">
                <a href={repo.html_url} target="_blank" rel="noopener noreferrer">
                  View Repo
                </a>
                {repo.homepage && (
                  <a href={repo.homepage} target="_blank" rel="noopener noreferrer">
                    Live Demo
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Projects;
