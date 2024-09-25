import { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { Editor } from '@tinymce/tinymce-react';
import style from '../styling/Write.module.scss';

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

  return (
    <>
      <div className="whole-container">
        <form onSubmit={handleSubmit}>
          <div className={style.header}>
            <div className="nes-select">
              <select value={section} onChange={(e) => setSection(e.target.value)}>
                <option value="React">React</option>
                <option value="Node.js">Node.js</option>
                <option value="Git">Git</option>
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
          <Editor
            apiKey={process.env.TINYMCE_API_KEY}
            init={{
              plugins: 'anchor autolink charmap codesample emoticons image link lists media searchreplace table visualblocks wordcount linkchecker',
              toolbar: 'undo redo | blocks fontfamily fontsize | bold italic underline strikethrough | link image media table mergetags | addcomment showcomments | spellcheckdialog a11ycheck typography | align lineheight | checklist numlist bullist indent outdent | emoticons charmap | removeformat',
              paste_data_images: true,
              file_picker_types: 'image',
              tinycomments_mode: 'embedded',
              tinycomments_author: 'Author name',
              mergetags_list: [
                { value: 'First.Name', title: 'First Name' },
                { value: 'Email', title: 'Email' },
              ],
              ai_request: (request, respondWith) => respondWith.string(() => Promise.reject("See docs to implement AI Assistant")),
            }}
            onEditorChange={(content) => setContent(content)}
          />
        </form>
      </div>
    </>
  );
}