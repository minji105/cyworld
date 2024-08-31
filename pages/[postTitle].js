import { useRouter } from 'next/router';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import style from './styling/Post.module.css';

export default function Post() {
  const router = useRouter();
  const { postTitle } = router.query;
  const [post, setPost] = useState(null);

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
          <div className={style.buttons}>
            <Link href='/Board' className={style.back}>← 이전</Link>
            <div>
              <button type='button' onClick={handleEdit}>수정</button>
              <button type='button' onClick={handleDelete}>삭제</button>
            </div>
          </div>
          <div className={style.info}>
            <h1>{post.title}</h1>
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
