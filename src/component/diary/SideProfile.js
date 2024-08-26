import styles from './styling/SideProfile.module.css'

function SideProfile() {
  return (
    <div className="left-container">
      <img src="/img/profile.png" alt="profile" className={styles.profile} />

      <div className={styles.divider}></div>

      <div className={styles.today}>
        <span className='retro mint'>TODAY IS..</span>
        <img src="/img/emoji.png" alt="happy" className={styles.emoji} />
        <span>행복</span>
      </div>

      <div className={styles.name}>
        조민지
        <div className={styles.gender}>♀</div>
      </div>
    </div>
  )
}

export default SideProfile;