import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html lang="ko">
      <Head>
        <meta charSet="UTF-8" />
        <meta name="title" content="조민지님의 미니홈피" />
        <meta name="application-name" content="조민지님의 미니홈피" />
        <meta name="author" content="조민지" />
        <meta name="description" content="싸이월드를 재현하여 만든 미니홈피입니다." />
        <meta name="keywords" content="미니홈피, 싸이월드" />
        <meta name="google-site-verification" content="Cv18yNK4mIg8h2D8a22NJ8BwtyghOJQjMMG9FUYejKw" />
        <meta property="og:title" content="조민지님의 미니홈피" />
        <meta property="og:description" content="싸이월드를 재현하여 만든 미니홈피입니다." />
        <title>조민지님의 미니홈피</title>
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
