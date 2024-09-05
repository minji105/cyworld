import React from 'react';
import styles from './styling/Category.module.css';
import { useRouter } from 'next/router';

function Category() {
  const router = useRouter();

  const getActiveClass = (path) => router.pathname === path ? styles.active : '';

  return (
    <div className={styles.container}>
      <div
        className={`${styles.index} ${getActiveClass('/')}`}
        onClick={() => router.push('/')}>
        홈
      </div>
      <div
        className={`${styles.index} ${getActiveClass('/Profile')}`}
        onClick={() => router.push('/Profile')}>
        프로필
      </div>
      <div
        className={`${styles.index} ${getActiveClass('/project/Projects')} 
        ${getActiveClass('/project/WriteProject')} 
        ${getActiveClass('/project/[projectTitle]')}
        ${getActiveClass('/project/edit/[projectTitle]')}
        `}
        onClick={() => router.push('/project/Projects')}>
        프로젝트
      </div>
      <div
        className={`${styles.index} ${getActiveClass('/board/Board')} 
        ${getActiveClass('/board/WritePost')} 
        ${getActiveClass('/board/[postTitle]')}
        ${getActiveClass('/board/edit/[postTitle]')}
        `}
        onClick={() => router.push('/board/Board')}>
        게시판
      </div>
      <div
        className={`${styles.index} ${getActiveClass('/GuestBook')}`}
        onClick={() => router.push('/GuestBook')}>
        방명록
      </div>
    </div>
  )
}

export default Category;