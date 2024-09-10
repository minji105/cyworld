import { useRouter } from 'next/router';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { Editor } from '@tinymce/tinymce-react';
import style from '../../styling/Write.module.css';

export default function EditPost() {
  const router = useRouter();
  const { projectTitle } = router.query;
  const [project, setProject] = useState(null);
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [section, setSection] = useState('');
  const [stacks, setStacks] = useState([]);
  const [stackInput, setStackInput] = useState('');

  useEffect(() => {
    if (projectTitle) {
      fetch(`http://localhost:3001/api/projects/${projectTitle}`)
        .then(res => res.json())
        .then(data => {
          setProject(data);
          setTitle(data.title);
          setContent(data.content);
          setSection(data.section);
          setStacks(data.stack || []);
        });
    }
  }, [projectTitle]);

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

  const handleSave = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append('title', title);
    formData.append('content', content);
    formData.append('section', section);
    stacks.forEach(stack => formData.append('stack', stack));


    try {
      const response = await fetch(`http://localhost:3001/api/projects/${projectTitle}`, {
        method: 'PUT',
        body: formData,
      });

      if (response.ok) {
        router.push('/project/Projects');
      } else {
        console.error('Failed to update post');
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  if (!project) return <div>Loading...</div>;

  return (
    <div className="whole-container">
      <form onSubmit={handleSave}>
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
            <Link href='/project/Projects'><button className='nes-btn' type="button">취소</button></Link>
            <button className='nes-btn' type="submit">저장</button>
          </div>
        </div>
        <Editor
          apiKey="dcuz3jq9lckyddsfzunwgrzvh5c52291hxt94bl221jmbo9p"
          value={content}
          init={{
            plugins: 'anchor autolink charmap codesample emoticons image link lists media searchreplace table visualblocks wordcount checklist mediaembed casechange export formatpainter pageembed linkchecker a11ychecker tinymcespellchecker permanentpen powerpaste advtable advcode editimage advtemplate ai mentions tinycomments tableofcontents footnotes mergetags autocorrect typography inlinecss markdown',
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
          onEditorChange={(newContent) => setContent(newContent)}
        />

        <div className={style.stack}>
          <input
            type="text"
            value={stackInput}
            onChange={(e) => setStackInput(e.target.value)}
            placeholder="스택을 입력하세요"
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

      </form>
    </div>
  );
}
