import styles from './styling/Home.module.css';
import SideProfile from '../src/component/diary/SideProfile';

function Home() {
  return (
    <>
      <SideProfile />

      <div className="right-container">
        <div className={styles.button}>Miniroom</div>
        <div className={styles.container}>
          <img src="/img/miniroom.gif" alt="miniroom" className={styles.miniroom} />
          <div className={styles.minimi}>
            ❣
            <img src="/img/profile.png" alt="minimi" />
            <div className={styles.bubble}>타닥타닥</div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Home;