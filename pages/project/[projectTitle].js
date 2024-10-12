import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import ReactMarkdown from 'react-markdown';
import rehypeRaw from 'rehype-raw';
import remarkGfm from 'remark-gfm';
import projects from "../../data/projectData";
import style from '../styling/Post.module.scss';

export default function Project() {
  const router = useRouter();
  const { projectTitle } = router.query;
  const [project, setProject] = useState(null);
  const [readmeContent, setReadmeContent] = useState('');

  useEffect(() => {
    if (projectTitle) {
      const projectData = projects.find(proj => proj.title === projectTitle);
      setProject(projectData || null);

      if (projectData && projectData.repo) {
        fetch(`https://api.github.com/repos/minji105/${projectData.repo}/readme`, {
          headers: {
            Accept: 'application/vnd.github.v3+json',
          },
        })
          .then(res => res.json())
          .then(data => {
            const decodedContent = new TextDecoder("utf-8").decode(Uint8Array.from(atob(data.content), c => c.charCodeAt(0)));
            setReadmeContent(decodedContent);
          })
          .catch(error => console.error('Error fetching README:', error));
      }
    }
  }, [projectTitle]);

  if (!project) return <div>Loading...</div>;

  return (
    <>
      <div className="whole-container">
        <div className="content">
          <div className={style.nav}>
            <Link href='/project/Projects' className={style.back}>← 이전</Link>
          </div>
          <div className={style.info}>
            <h2>{project.title}</h2>
            <span>{project.section}</span>
          </div>

          <div className={style.readme}>
            {readmeContent ? (
              <ReactMarkdown
                children={readmeContent}
                remarkPlugins={[remarkGfm]} 
                rehypePlugins={[rehypeRaw]} 
              />
            ) : (
              <div>cannot find readme</div>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
