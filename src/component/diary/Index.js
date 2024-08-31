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
        className={`${styles.index} ${getActiveClass('/Projects')}`}
        onClick={() => router.push('/Projects')}>
        프로젝트
      </div>
      <div
        className={`${styles.index} ${getActiveClass('/Board')} ${getActiveClass('/Write')} ${getActiveClass('/[postTitle]')}`}
        onClick={() => router.push('/Board')}>
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