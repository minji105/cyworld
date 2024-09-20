import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import style from '../styling/Post.module.scss';

export default function Project() {
  const router = useRouter();
  const { projectTitle } = router.query;
  const [project, setProject] = useState(null);

  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      setIsLoggedIn(true);
    }
  }, []);

  useEffect(() => {
    if (projectTitle) {
      fetch(`http://localhost:3001/api/projects/${projectTitle}`)
        .then(res => res.json())
        .then(data => setProject(data));
    }
  }, [projectTitle]);

  const handleDelete = async () => {
    // eslint-disable-next-line no-restricted-globals
    if (confirm('정말로 이 게시물을 삭제하시겠습니까?')) {
      try {
        const response = await fetch(`http://localhost:3001/api/projects/${projectTitle}`, {
          method: 'DELETE',
        });

        if (response.ok) {
          router.push('/project/Projects');
        } else {
          console.error('Failed to delete post');
        }
      } catch (error) {
        console.error('Error:', error);
      }
    }
  };

  const handleEdit = () => {
    router.push(`/project/edit/${projectTitle}`);
  };

  if (!project) return <div>Loading...</div>;

  return (
    <>
      <div className="whole-container">
        <div className="content">
          <div className={style.nav}>
            <Link href='/project/Projects' className={style.back}>← 이전</Link>
            {isLoggedIn && (
              <div className={style.buttons}>
                <button type='button' className='nes-btn' onClick={handleEdit}>수정</button>
                <button type='button' className='nes-btn' onClick={handleDelete}>삭제</button>
              </div>
            )}
          </div>
          <div className={style.info}>
              <h2>{project.title}</h2>
              <span>{project.section}</span>
          </div>
          <div dangerouslySetInnerHTML={{ __html: project.content }} style={{fontFamily: 'initial'}}/>
        </div>
      </div>
    </>
  );
}
