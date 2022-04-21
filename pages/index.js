import Head from 'next/head';
import styles from '../styles/Home.module.css';
import About from './components/About';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Will McBurney's portfolio</title>
        <link rel="shortcut icon" href="/emoji.ico" />
      </Head>

      <About />
    </div>
  );
}
