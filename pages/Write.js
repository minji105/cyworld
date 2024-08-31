import { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { Editor } from '@tinymce/tinymce-react';
import style from './styling/Writer.module.css';

export default function Write() {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [section, setSection] = useState('React');
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const postData = {
      title: title,
      content: content,
      section: section,
    };

    try {
      const response = await fetch('http://localhost:3001/api/posts', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(postData),
      });

      if (response.ok) {
        router.push('/Board')
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
          <select value={section} onChange={(e) => setSection(e.target.value)}>
            <option value="React">React</option>
            <option value="Node.js">Node.js</option>
          </select>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="제목"
            required
            className={style.title}
          />
          <Editor
            apiKey='dcuz3jq9lckyddsfzunwgrzvh5c52291hxt94bl221jmbo9p'
            init={{
              plugins: 'anchor autolink charmap codesample emoticons image link lists media searchreplace table visualblocks wordcount checklist mediaembed casechange export formatpainter pageembed linkchecker a11ychecker tinymcespellchecker permanentpen powerpaste advtable advcode editimage advtemplate ai mentions tinycomments tableofcontents footnotes mergetags autocorrect typography inlinecss markdown',
              toolbar: 'undo redo | blocks fontfamily fontsize | bold italic underline strikethrough | link image media table mergetags | addcomment showcomments | spellcheckdialog a11ycheck typography | align lineheight | checklist numlist bullist indent outdent | emoticons charmap | removeformat',
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
          <div className={style.buttons}>
            <button type="button"><Link href='/Board'>취소</Link></button>
            <button type="submit">저장</button>
          </div>
        </form>
      </div>
    </>
  );
}