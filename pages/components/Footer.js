import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import styles from './Footer.module.css';

export default function Footer() {
  return (
    <footer className={styles.footer_container}>
      <Head>
        <style>
          @import
          url('https://fonts.googleapis.com/css2?family=Akshar:wght@300;400;500;600;700&display=swap');
        </style>
      </Head>
      <p className={styles.footer_text}>
        This website was built by William McBurney using JavaScript, Next.js and
        CSS
      </p>
      <span className={styles.footer_logos_container}>
        <Link href="https://github.com/willmcb94">
          <a className={styles.footer_logos} target="_blank">
            <Image
              className={styles.footer_img}
              src="/assets/github.png"
              width={25}
              height={25}
              alt="Github logo"
            />
          </a>
        </Link>
        <Link href="https://www.linkedin.com/in/will-mcburney-a114b7153">
          <a
            className={styles.footer_img}
            className={styles.footer_logos}
            target="_blank"
          >
            <Image
              src="/assets/linkedin-BW.png"
              width={25}
              height={25}
              alt="Linkedin logo"
            />
          </a>
        </Link>
      </span>
    </footer>
  );
}
