import { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import 'react-quill/dist/quill.snow.css';
import style from '../styling/Write.module.scss';

import dynamic from 'next/dynamic';
const ReactQuill = dynamic(() => import('react-quill'), { ssr: false });

export default function Write() {
  const router = useRouter();
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [section, setSection] = useState('React');

  const handleSubmit = async (e) => {
    e.preventDefault();

    const postData = {
      title: title,
      content: content,
      section: section,
    };

    try {
      const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/posts`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(postData),
      });

      if (response.ok) {
        router.push('/board/Board')
      } else {
        console.error('Failed to create post');
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  const modules = {
    toolbar: {
      container: [
        ["link", "image"],
        [{ header: [1, 2, 3, 4, 5, false] }],
        ["bold", "italic", "underline", "strike"],
        [{ list: "ordered" }, { list: "bullet" }],
        [{ color: [] }, { background: [] }],
        [{ align: [] }],
      ],
    },
  };

  return (
    <>
      <div className="whole-container">
        <form onSubmit={handleSubmit}>
          <div className={style.header}>
            <div className="nes-select">
              <select value={section} onChange={(e) => setSection(e.target.value)}>
                <option value="etc">Etc</option>
              </select>
            </div>
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="제목"
              required
              className={`nes-input ${style.title}`}
            />
            <div className={style.buttons}>
              <Link href='/board/Board'><button type="button" className='nes-btn'>취소</button></Link>
              <button type="submit" className='nes-btn'>저장</button>
            </div>
          </div>
          <ReactQuill
            style={{ height: "60vh" }}
            modules={modules}
            onChange={setContent}
          />
        </form>
      </div>
    </>
  );
}