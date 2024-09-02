import { useRouter } from 'next/router';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { Editor } from '@tinymce/tinymce-react';
import style from '../styling/Write.module.css';

export default function EditPost() {
  const router = useRouter();
  const { postTitle } = router.query;
  const [post, setPost] = useState(null);
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  useEffect(() => {
    if (postTitle) {
      fetch(`http://localhost:3001/api/posts/${postTitle}`)
        .then(res => res.json())
        .then(data => {
          setPost(data);
          setTitle(data.title);
          setContent(data.content);
        });
    }
  }, [postTitle]);

  const handleSave = async (e) => {
    e.preventDefault();

    const updatedPost = {
      title,
      content,
    };

    try {
      const response = await fetch(`http://localhost:3001/api/posts/${postTitle}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(updatedPost),
      });

      if (response.ok) {
        router.push(`/Board`);
      } else {
        console.error('Failed to update post');
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  if (!post) return <div>Loading...</div>;

  return (
    <div className="whole-container">
      <form onSubmit={handleSave}>
        <div className={style.header}>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="제목"
            required
            className={`nes-input ${style.title}`}
          />
          <div className={style.buttons}>
            <Link href='/Board'><button className='nes-btn' type="button">취소</button></Link>
            <button className='nes-btn' type="submit">저장</button>
          </div>
        </div>
        <Editor
          apiKey="dcuz3jq9lckyddsfzunwgrzvh5c52291hxt94bl221jmbo9p"
          value={content}
          init={{
            plugins: 'link image code',
            toolbar: 'undo redo | bold italic | alignleft aligncenter alignright | code',
          }}
          onEditorChange={(newContent) => setContent(newContent)}
        />
      </form>
    </div>
  );
}
