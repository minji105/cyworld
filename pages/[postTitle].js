import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import style from './styling/Post.module.css';

export default function Post() {
  const router = useRouter();
  const { postTitle } = router.query;
  const [post, setPost] = useState(null);

  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      setIsLoggedIn(true);
    }
  }, []);

  useEffect(() => {
    if (postTitle) {
      fetch(`http://localhost:3001/api/posts/${postTitle}`)
        .then(res => res.json())
        .then(data => setPost(data));
    }
  }, [postTitle]);

  const handleDelete = async () => {
    if (confirm('정말로 이 게시물을 삭제하시겠습니까?')) {
      try {
        const response = await fetch(`http://localhost:3001/api/posts/${postTitle}`, {
          method: 'DELETE',
        });

        if (response.ok) {
          router.push('/Board');
        } else {
          console.error('Failed to delete post');
        }
      } catch (error) {
        console.error('Error:', error);
      }
    }
  };

  const handleEdit = () => {
    router.push(`/edit/${postTitle}`);
  };

  if (!post) return <div>Loading...</div>;

  return (
    <>
      <div className="whole-container">
        <div className="content">
          <div className={style.nav}>
            <Link href='/Board' className={style.back}>← 이전</Link>
            {isLoggedIn && (
              <div className={style.buttons}>
                <button type='button' className='nes-btn' onClick={handleEdit}>수정</button>
                <button type='button' className='nes-btn' onClick={handleDelete}>삭제</button>
              </div>
            )}
          </div>
          <div className={style.info}>
            <div>
              <span>{post.section}</span>
              <h2>{post.title}</h2>
            </div>
            <div>
              <span>작성일자: {post.createdAt}</span>
              <span style={{ marginLeft: '32px' }}>작성자: {post.writer}</span>
            </div>
          </div>
          <div dangerouslySetInnerHTML={{ __html: post.content }} />
        </div>
      </div>
    </>
  );
}
