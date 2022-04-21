import styles from './Header.module.css';
import Link from 'next/link';

export default function Header() {
  return (
    <header className={styles.header_container}>
      <h1 className={styles.header_title}>
        Will McBurney<br></br> Portfolio page
      </h1>
      <nav className={styles.header_nav}>
        <Link href="/">
          <a className={styles.link_text}>Home</a>
        </Link>

        <Link href="/projects">
          <a className={styles.link_text}>Projects</a>
        </Link>
        <Link href="/contact">
          <a className={styles.link_text}>Contact</a>
        </Link>
      </nav>
    </header>
  );
}
