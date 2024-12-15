import './global/Global.scss';
import './global/Nes.css';
import Head from 'next/head';
import Diary from '../src/component/diary/Diary';
import Side from '../src/component/side/Side';

function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta name="title" content="조민지님의 미니홈피" />
        <meta name="application-name" content="조민지님의 미니홈피"></meta>
        <meta name="author" content="조민지"></meta>
        <meta name="description" content="싸이월드를 재현하여 만든 미니홈피입니다." />
        <meta name="keywords" content="미니홈피, 싸이월드" />
        <meta name="google-site-verification" content="YT2ed87ec-uxvMV765Y78BYLFEs1CKVUe7xi8VH6JVw" />
        <meta property="og:title" content="조민지님의 미니홈피" />
        <meta property="og:description" content="싸이월드를 재현하여 만든 미니홈피입니다." />
        <meta charset="UTF-8"></meta>
        <title>조민지님의 미니홈피</title>
      </Head>
      <Diary />
      <Side />
      <Component {...pageProps} />
    </>
  );
}

export default App;
