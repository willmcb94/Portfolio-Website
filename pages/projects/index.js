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
        <style>
          @import
          url('https://fonts.googleapis.com/css2?family=Akshar:wght@300;400;500;600;700&display=swap');
        </style>
      </Head>
      <main className={styles.projects_container}>
        {projects.map((project, index) => {
          return (
            <ProjectCard
              key={`${project.title} ${index}`}
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
