import styles from '../../styles/Projects.module.css';
import ProjectCard from '../components/ProjectCard';
import Head from 'next/head';

export default function Projects() {
  const projects = [
    {
      id: 'nc-news-backend',
      title: 'NC-News API',
      type: 'Backend API',
      tech: '/assets/be-nc-news-tech.png',
    },
    {
      id: 'nc-news-frontend',
      title: 'NC-News',
      type: 'Frontend web application',
      tech: '/assets/nc-news-tech.png',
    },

    {
      id: 'walkease',
      title: 'WalkEase',
      type: 'Fullstack mobile application',
      tech: '/assets/WalkEase.png',
    },
  ];
  return (
    <div className={styles.main_container}>
      <Head>
        <title>Will McBurneys Portfolio - Projects</title>
      </Head>
      <main className={styles.projects_container}>
        {projects.map((project) => {
          return (
            <ProjectCard
              id={project.id}
              title={project.title}
              type={project.type}
              tech={project.tech}
            />
          );
        })}
      </main>
    </div>
  );
}
