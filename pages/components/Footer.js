import styles from './Footer.module.css';

export default function Footer() {
  return (
    <footer className={styles.footer_container}>
      <p className={styles.footer_text}>
        This website was built by William McBurney using JavaScript, Next.js and
        CSS
      </p>
    </footer>
  );
}
