import styles from './About.module.css';
import Image from 'next/image';
import Head from 'next/head';

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
            Hi I'm Will, I come from the rainy city (Manchester). I grew up as
            the web became popular, seeing how it's grown and changed over the
            past 20 years is nothing less than astonishing.<br></br>
            <br></br>
            This is what has inspired me to leave my stable career in sales to
            become a developer! I’m extremely excited about what the future
            holds for internet use and how I can be involved in this inovation
            on my new career path.<br></br>
            <br></br>I have graduated from the Northcoders fullstack developer
            bootcamp and now I’m in search of my first developer role.<br></br>
            <br></br>
            I’m keen to work for a company with a culture of learning where I
            can really challenge myself to be better every day. I wish to build
            my knowledge while creating code for the benefit of others.<br></br>
            <br></br>
            If you have any questions or you are/know anybody in search of a
            junior developer currently, please get in touch.
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
            </article>
            <article className={styles.skills_indiv_container}>
              <h4 className={styles.skills_indiv_title}>Backend</h4>
            </article>
            <article className={styles.skills_indiv_container}>
              <h4 className={styles.skills_indiv_title}>Other</h4>
              <ul>
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
          </div>
        </div>
      </div>
    </main>
  );
}
