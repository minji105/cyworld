import React, { useState, useEffect } from "react";
import Link from "next/link";
import styles from './styling/Home.module.scss';
import SideProfile from '../src/component/diary/SideProfile';
import Ring from '../src/component/diary/Ring';
import projects from "../data/projectData";

function Home() {
  const [posts, setPosts] = useState([]);
  const [entries, setEntries] = useState([]);

  useEffect(() => {
    fetch('/api/posts')
      .then(res => res.json())
      .then(data => setPosts(data));
    fetch('/api/entries')
      .then(res => res.json())
      .then(data => setEntries(data));
  }, []);

  return (
    <>
      <SideProfile />
      <Ring />

      <div className="right-container">
        <div className={styles.title}>Updated News</div>
        <div className={styles.updatedNews}>
          <div className={styles.empty}>
            등록된 게시물이 없습니다.
          </div>
          <table>
            <thead></thead>
            <tbody>
              <tr>
                <td>
                  <Link href='/project/Projects'>프로젝트</Link>
                  <span className={styles.total}> 0/{projects.length}</span>
                </td>
                <td>
                  <Link href='/board/Board'>게시물</Link>
                  <span className={styles.total}> 0/{posts.length}</span>
                </td>
              </tr>
              <tr>
                <td>
                  <Link href='/GuestBook'>방명록</Link>
                  <span className={styles.total}> 0/{entries.length}</span></td>
                <td></td>
              </tr>
              <tr>
                <td></td>
                <td></td>
              </tr>
            </tbody>
            <tfoot></tfoot>
          </table>
        </div>
        <div className={styles.containerTitle}>Miniroom</div>
        <div className={styles.container}>
          <img src="/img/etc/miniroom.gif" alt="miniroom" className={styles.miniroom} />
          <div className={styles.minimi}>
            <i className="nes-icon is-small heart"></i>
            <img src="/img/etc/my-minimi.png" alt="minimi" />
            <div className={styles.bubble}>타닥타닥</div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Home;