import styles from './styling/Home.module.css';
import SideProfile from '../src/component/diary/SideProfile';
import Ring from '../src/component/diary/Ring';

function Home() {
  return (
    <>
      <SideProfile />
      <Ring />

      <div className="right-container">
        <div className={styles.button}>Miniroom</div>
        <div className={styles.container}>
          <img src="/img/etc/miniroom.gif" alt="miniroom" className={styles.miniroom} />
          <div className={styles.minimi}>
            ♫
            <img src="/img/etc/my-minimi.png" alt="minimi" />
            <div className={styles.bubble}>타닥타닥</div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Home;