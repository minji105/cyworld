import Link from 'next/link';
import { useEffect, useState } from 'react';
import styles from '../styling/Board.module.css';

function Board() {
  const [posts, setPosts] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 13;

  useEffect(() => {
    fetch('http://localhost:3001/api/posts')
      .then(res => res.json())
      .then(data => setPosts(data));
  }, []);

  const filteredPosts = selectedCategory === 'All'
    ? posts
    : posts.filter(post => post.section === selectedCategory);

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = filteredPosts.slice(indexOfFirstPost, indexOfLastPost);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  const handleCategoryChange = (e) => {
    setSelectedCategory(e.target.value);
    setCurrentPage(1);
  };

  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(filteredPosts.length / postsPerPage); i++) {
    pageNumbers.push(i);
  }

  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      setIsLoggedIn(true);
    }
  }, []);

  return (
    <>
      <div className="whole-container">
        <div className="content">
          <div className={styles.header}>
            <div className="nes-select">
              <select name="category" id="category" value={selectedCategory} onChange={handleCategoryChange}>
                <option value="All" selected>전체보기</option>
                <option value="React">React</option>
                <option value="Node.js">Node.js</option>
                <option value="Git">Git</option>
              </select>
            </div>
            {isLoggedIn && (
              <Link href="/board/WritePost">
                <button className='nes-btn'>글쓰기</button>
              </Link>
            )}
          </div>

          <table className={styles.table}>
            <thead>
              <tr>
                <th></th>
                <th>제목</th>
                <th>작성자</th>
                <th>작성일</th>
                <th>조회</th>
              </tr>
            </thead>
            <tbody>
              {currentPosts.map((post, index) => (
                <tr key={post.title}>
                  <td className='retro'>{indexOfFirstPost + index + 1}</td>
                  <td><Link href={`/board/${post.title}`}>{post.title}</Link></td>
                  <td>{post.writer}</td>
                  <td className='retro'>{post.createdAt}</td>
                  <td className='retro'>{post.views}</td>
                </tr>
              ))}
            </tbody>
          </table>

          <div className={`retro ${styles.pagination}`}>
            {pageNumbers.map(number => (
              <div
                key={number}
                onClick={() => paginate(number)}
                className={currentPage === number ? styles.activePage : ''}
              >
                {number}
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  )
}

export default Board;