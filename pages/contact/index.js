import Head from 'next/head';
import Image from 'next/image';
import styles from '../../styles/Contact.module.css';
import Link from 'next/link';

export default function Contact() {
  const contacts = [
    {
      title: 'Connect with me on Linkedin!',
      img: '/assets/linkedin.png',
      link: 'https://www.linkedin.com/in/will-mcburney-a114b7153',
      alt: 'Linkedin logo',
    },
    {
      title: 'Check out my Github!',
      img: '/assets/github-logo.png',
      link: 'https://github.com/willmcb94',
      alt: 'Github logo',
    },
    {
      title: 'Drop me an Email!',
      img: '/assets/email.png',
      link: 'mailto:willmcburney94@googlemail.com',
      alt: 'Email icon',
    },
  ];
  return (
    <main className={styles.main}>
      <Head>
        <title>Will McBurney's portfolio - Contact</title>
        <style>
          @import
          url('https://fonts.googleapis.com/css2?family=Akshar:wght@300;400;500;600;700&display=swap');
        </style>
      </Head>

      <h2 className={styles.contact_title}>Please feel free to...</h2>
      <div className={styles.contact_container}>
        {contacts.map((contact) => {
          return (
            <Link key={`${contact.title}1`} href={contact.link}>
              <a target="_blank">
                <article key={contact.title} className={styles.contact_card}>
                  <h3 className={styles.contact_text}>{contact.title}</h3>
                  <Image
                    src={contact.img}
                    width={200}
                    height={200}
                    alt={contact.alt}
                  />
                </article>
              </a>
            </Link>
          );
        })}
      </div>
    </main>
  );
}
