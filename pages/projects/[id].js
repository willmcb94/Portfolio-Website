import Link from 'next/link';
import styles from './ProjectPage.module.css';
import Head from 'next/head';

const data = [
  {
    id: 'nc-news-backend',
    title: 'NC-News Backend',
    url: 'https://github.com/willmcb94/BE-NC-NEWS',
    about:
      'An API built giving access to various news articles which can be sorted & filtered with queries. I built this project using SQL, Express, Postgres-sql and using Jest throughout for TDD. I hosted the API with Heroku. The project was created to be used as the backend for my NC News website.',
    image: '/../public/assets/WalkEase.jpg',
    demo: 'https://will-nc-news.herokuapp.com/api',
    video: 'https://www.youtube.com/embed/koyLrru_0YQ',
  },
  {
    id: 'nc-news-frontend',
    title: 'NC-News Frontend',
    url: 'https://github.com/willmcb94/nc-news',
    about:
      'This is a website built using my previously created backend api. The website was created with React, HTML and CSS for the frontend. It displays various news articles which can be sorted and filtered. Users can like/dislike articles as well as comment on them and delete their own comments, all of which will update the backend database accordingly. The web app has been hosted with Netlify.',
    image: '/../public/assets/NC-News-frontend.png',
    demo: 'https://will-mcb-nc-news.netlify.app/',
    video: 'https://www.youtube.com/embed/5UWyAZqw8fI',
  },

  {
    id: 'walkease',
    title: 'WalkEase',
    url: 'https://github.com/WalkEase/walkease',
    about:
      "WalkEase is a mobile app I built as part of a 6 person agile development team in just 8 days, including planning time. We created the app with technologies we hadn’t used before; React Native and Expo for the frontend and using Firebase (and various APIs) for the backend. The app is designed to help busy dog owners who don't always have time to walk their dogs to connect with people who wish to walk dogs but may not have their own.",
    image: '/../public/assets/WalkEase.jpg',
    demo: '',
    video: 'https://www.youtube.com/embed/prfCiAVkhpc',
  },
];
export const getStaticPaths = () => {
  const paths = data.map((project) => {
    return {
      params: { id: project.id },
    };
  });
  return {
    paths,
    fallback: false,
  };
};
export const getStaticProps = (context) => {
  const id = context.params.id;
  const proj = data
    .filter((project) => {
      return project.id === id;
    })
    .shift();
  return {
    props: { proj },
  };
};
export default function ProjectPage({ proj }) {
  return (
    <div className={styles.proj_container}>
      <Head>
        <title>{`Will McBurneys Portfolio - ${proj.title}`}</title>
      </Head>
      <main className={styles.main}>
        <article className={styles.text_container}>
          <h2 className={styles.proj_title}>{proj.title}</h2>
          <p className={styles.proj_text}>{proj.about}</p>
          <div className={styles.links_container}>
            <h3 className={styles.links_title}>Github</h3>
            <Link href={proj.url}>
              <a target="_blank" className={styles.project_link}>
                {proj.url}
              </a>
            </Link>
            {proj.demo ? (
              <>
                <h3 className={styles.links_title}>Hosted</h3>
                <Link href={proj.demo}>
                  <a target="_blank" className={styles.project_link}>
                    {proj.demo}
                  </a>
                </Link>
              </>
            ) : null}
          </div>
        </article>
        <div className={styles.video_container}>
          <iframe
            width="560"
            height="315"
            src={proj.video}
            title={`Demo of my ${proj.title} project`}
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen="true"
            aria-hidden="true"
          ></iframe>
        </div>
      </main>
    </div>
  );
}
