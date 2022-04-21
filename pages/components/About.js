import styles from './About.module.css';
import Image from 'next/image';

export default function About() {
  return (
    <div className={styles.about_container}>
      <div className={styles.text_container}>
        <h2 className={styles.about_title}>About me</h2>
        <p className={styles.about_text}>
          Hi I'm Will, I come from the rainy city (Manchester). I grew up as the
          web became popular, seeing how it's grown and changed over the past 20
          years is nothing less than astonishing.<br></br>
          <br></br>
          This is what has inspired me to leave my stable career in sales to
          become a developer! I’m extremely excited about what the future holds
          for internet use and how I can be involved in this inovation on my new
          career path.<br></br>
          <br></br>I have graduated from the Northcoders fullstack developer
          bootcamp and now I’m in search of my first developer role.<br></br>
          <br></br>
          I’m keen to work for a company with a culture of learning where I can
          really challenge myself to be better every day. I wish to build my
          knowledge while creating code for the benefit of others.<br></br>
          <br></br>
          If you have any questions or you are/know anybody in search of a
          junior developer currently, please get in touch.
        </p>
      </div>
      <div className={styles.img_container}>
        <div className={styles.img_size}>
          <Image
            layout={'fill'}
            objectFit={'contain'}
            src="/assets/profile.png"
          ></Image>
        </div>
      </div>
    </div>
  );
}