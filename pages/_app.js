import '../styles/globals.css';
import Head from 'next/head';
import Header from './components/Header';
import Footer from './components/Footer';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Will McBurney's portfolio</title>
        <link rel="shortcut icon" href="/emoji.ico" />
        <style>
          @import
          url('https://fonts.googleapis.com/css2?family=Inter:wght@400;700&display=swap');
        </style>
      </Head>
      <Header />
      <Component {...pageProps} />
      <Footer />
    </>
  );
}

export default MyApp;
