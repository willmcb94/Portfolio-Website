import styles from './About.module.css';
import Image from 'next/image';
import Head from 'next/head';
import Link from 'next/link';

export default function About() {
  return (
    <main className={styles.main}>
      <div className={styles.about_container}>
        <Head>
          <title>Will McBurney - About</title>
          <style>
            @import
            url('https://fonts.googleapis.com/css2?family=Akshar:wght@300;400;500;600;700&display=swap');
          </style>
        </Head>
        <article className={styles.text_container}>
          <h2 className={styles.about_title}>About me</h2>
          <p className={styles.about_text}>
            Based in the vibrant (albeit rainy) city of Manchester, I matured
            around the same time that the internet did - watching it evolve in
            astonishing ways over the past 20 or so years.<br></br>
            <br></br>
            Having always been struck by emerging web innovations, I became
            motivated to work with the technologies that come next…<br></br>
            <br></br>
            Driven by this passion to become a developer, I spent more evenings
            than not buried in code, restlessly itching to leave my stable sales
            career behind. And after graduating from the Northcoders Fullstack
            Developer Bootcamp, I’m now ready for my first role.<br></br>
            <br></br>
            I’d love to land in a company with a culture of learning, where I
            can showcase my acquired skill set while continuously bettering
            myself. The challenge excites me - as does the ability to craft
            great code that really makes a difference.<br></br>
            <br></br>
            Want to know more? Please don’t hesitate to{' '}
            <Link href="/contact">
              <a className={styles.get_in_touch}>get in touch</a>
            </Link>{' '}
            about any opportunities you may have for an eager junior developer.
          </p>
        </article>
        <div className={styles.img_container}>
          <div className={styles.img_size}>
            <Image
              layout={'fill'}
              objectFit={'contain'}
              src="/assets/profile.png"
              alt="Profile picture of me"
            ></Image>
          </div>
        </div>
      </div>
      <div className={styles.skills_main}>
        <div className={styles.skills_container}>
          <h3 className={styles.skills_title}>Technical Skills</h3>
          <div className={styles.skills_text_container}>
            <article className={styles.skills_indiv_container}>
              <h4 className={styles.skills_indiv_title}>Frontend</h4>
              <ul className={styles.skills_list}>
                <li>JavaScript</li>
                <li>React</li>
                <li>React Native</li>
                <li>Next.js</li>
                <li>HTML5</li>
                <li>CSS3</li>
                <li>Node.js</li>
                <li>Jest</li>
              </ul>
            </article>
            <article className={styles.skills_indiv_container}>
              <h4 className={styles.skills_indiv_title}>Backend</h4>
              <ul className={styles.skills_list}>
                <li>Express</li>
                <li>Postgres-sql</li>
                <li>SQL</li>
                <li>Node.js</li>
                <li>Firebase</li>
              </ul>
            </article>
            <article className={styles.skills_indiv_container}>
              <h4 className={styles.skills_indiv_title}>Additional</h4>
              <ul className={styles.skills_list}>
                <li>Git</li>
                <li>Agile</li>
                <li>Kanban</li>
                <li>Trello</li>
                <li>Miro</li>
              </ul>
            </article>
          </div>
        </div>
      </div>
    </main>
  );
}
