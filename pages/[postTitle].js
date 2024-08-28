import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

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

  if (!post) return <div>Loading...</div>;

  return (
    <>
      <div className="right-container">
        <h1>{post.title}</h1>
        <div dangerouslySetInnerHTML={{ __html: post.content }} />
      </div>
    </>
  );
}
