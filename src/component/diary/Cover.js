import styles from './styling/Cover.module.scss';
import Visitor from './Visitor';

function Cover() {
  return (
    <>
      <div className={styles.outer}>
        <div className={styles.outerLeft}></div>
        <div className={styles.outerRight}></div>
        <div className={styles.outerCover}></div>

        <div className={styles.inner}>
          <div className={styles.innerLeft}>
            <Visitor />
          </div>
          <div className={styles.innerRight}>
            <div className={styles.title}>조민지님의 미니홈피</div>
          </div>
          <div className={styles.innerCover}></div>
        </div>

        <div className={styles.dot}>
          <div className={styles.dotLeft}></div>
          <div className={styles.dotRight}></div>
        </div>
      </div>
    </>
  )
}

export default Cover;