import { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { Editor } from '@tinymce/tinymce-react';
import style from '../styling/Write.module.css';

export default function Write() {
  const router = useRouter();
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [section, setSection] = useState('Web');
  const [stacks, setStacks] = useState([]);
  const [stackInput, setStackInput] = useState('');
  const [mainImage, setMainImage] = useState(null);

  const handleStackAdd = () => {
    if (stackInput.trim()) {
      setStacks([...stacks, stackInput.trim()]);
      setStackInput('');
    }
  };

  const handleStackDelete = (index) => {
    const newStacks = stacks.filter((_, i) => i !== index);
    setStacks(newStacks);
  };

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    setMainImage(file);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append('title', title);
    formData.append('content', content);
    formData.append('section', section);
    formData.append('stack', JSON.stringify(stacks));
    formData.append('mainImage', mainImage);

    try {
      const response = await fetch('http://localhost:3001/api/projects', {
        method: 'POST',
        body: formData,
      });

      if (response.ok) {
        router.push('/project/Projects')
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
                <option value="Web">Web</option>
                <option value="AR/VR">AR/VR</option>
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
              <Link href='/project/Projects'><button type="button" className='nes-btn'>취소</button></Link>
              <button type="submit" className='nes-btn'>저장</button>
            </div>
          </div>
          <Editor
            apiKey='dcuz3jq9lckyddsfzunwgrzvh5c52291hxt94bl221jmbo9p'
            init={{
              plugins: 'anchor autolink charmap codesample emoticons image link lists media searchreplace table visualblocks wordcount linkchecker',
              toolbar: 'undo redo | blocks fontfamily fontsize | bold italic underline strikethrough | link image media table mergetags | addcomment showcomments | spellcheckdialog a11ycheck typography | align lineheight | checklist numlist bullist indent outdent | emoticons charmap | removeformat',
              paste_data_images: true,
              file_picker_types: 'image media',
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

          <div className={style.stack}>
            <input
              type="text"
              value={stackInput}
              onChange={(e) => setStackInput(e.target.value)}
              placeholder="스택"
              className="nes-input"
            />
            <button type="button" className="nes-btn is-primary" onClick={handleStackAdd}>
              추가
            </button>

            <div className={style.stacks}>
              {stacks.map((stack, index) => (
                <div key={index} className={style.stackItem}>
                  <span className="is-primary">{stack} </span>
                  <i class="nes-icon close is-small" onClick={() => handleStackDelete(index)}></i>
                </div>
              ))}
            </div>
          </div>

          <div>
            <label htmlFor="mainImage">메인 이미지 업로드:</label>
            <input type="file" id="mainImage" onChange={handleImageUpload} />
          </div>
        </form>
      </div>
    </>
  );
}