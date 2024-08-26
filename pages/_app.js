import './Global.css';
import Diary from '../src/component/diary/Diary';
import Side from '../src/component/side/Side';

function App({ Component, pageProps }) {
  return (
    <>
      <Diary />
      <Side />
      <Component {...pageProps} />
    </>
  );
}

export default App;
