import styles from './Header.module.css';
import Link from 'next/link';
import Head from 'next/head';

export default function Header() {
  return (
    <header className={styles.header_container}>
      <Head>
        <style>
          @import
          url('https://fonts.googleapis.com/css2?family=Akshar:wght@300;400;500;600;700&display=swap');
        </style>
      </Head>
      <div className={styles.header_content_container}>
        <div className={styles.header_text_container}>
          <h1 className={styles.header_name}>Will McBurney</h1>
          <h2 className={styles.header_subname}>Junior developer</h2>
        </div>
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
      </div>
    </header>
  );
}
