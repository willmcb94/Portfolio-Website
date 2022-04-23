import styles from './ProjectCard.module.css';
import Link from 'next/link';
import Image from 'next/image';

export default function ProjectCard({ id, title, type, tech }) {
  return (
    <Link href={`/projects/${id}`}>
      <div className={styles.project_container}>
        <article>
          <h3 className={styles.project_title}>{title}</h3>
          <h4 className={styles.project_type}>{type}</h4>
        </article>
        <Image
          src={tech}
          width={300}
          height={300}
          alt="Collage, using logos of tech used"
        />
      </div>
    </Link>
  );
}
