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
        <meta name="description" content="싸이월드를 재현하여 만든 미니홈피입니다." />
        <meta name="keywords" content="미니홈피, 싸이월드" />
        <meta property="og:title" content="조민지님의 미니홈피" />
        <meta property="og:description" content="싸이월드를 재현하여 만든 미니홈피입니다." />
        
        <title>조민지님의 미니홈피</title>
      </Head>
      <Diary />
      <Side />
      <Component {...pageProps} />
    </>
  );
}

export default App;
