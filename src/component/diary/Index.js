import React from 'react';
import Link from 'next/link';
import styles from './styling/Category.module.css';
import { useRouter } from 'next/router';

function Category() {
  const router = useRouter();

  const getActiveClass = (path) => router.pathname === path ? styles.active : '';

  return (
    <div className={styles.container}>
      <Link href='/'>
        <div className={`${styles.index} ${getActiveClass('/')}`}>
          홈
        </div>
      </Link>

      <Link href='/Profile'>
        <div className={`${styles.index} ${getActiveClass('/Profile')}`}>
          프로필
        </div>
      </Link>

      <Link href='/project/Projects'>
        <div className={`${styles.index} ${getActiveClass('/project/Projects')} 
          ${getActiveClass('/project/WriteProject')} 
          ${getActiveClass('/project/[projectTitle]')}
          ${getActiveClass('/project/edit/[projectTitle]')}`}>
          프로젝트
        </div>
      </Link>

      <Link href='/board/Board'>
        <div className={`${styles.index} ${getActiveClass('/board/Board')} 
          ${getActiveClass('/board/WritePost')} 
          ${getActiveClass('/board/[postTitle]')}
          ${getActiveClass('/board/edit/[postTitle]')}`}>
          게시판
        </div>
      </Link>

      <Link href='/GuestBook'>
        <div className={`${styles.index} ${getActiveClass('/GuestBook')}`}>
          방명록
        </div>
      </Link>
    </div>
  )
}

export default Category;