import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import style from './Login.module.scss'

export default function Login() {
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      setIsLoggedIn(true);
    }
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('http://localhost:3001/api/admin/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ password }),
      });

      if (response.ok) {
        const data = await response.json();
        localStorage.setItem('token', data.token);
        setIsLoggedIn(true);
        setLoginOpen(false);
      } else {
        setError('Invalid password');
      }
    } catch (error) {
      setError('error occurred');
    }
  };

  const handleLogout = () => {
    localStorage.removeItem('token');
    setIsLoggedIn(false);
    router.push('/');
  };

  const [loginOpen, setLoginOpen] = useState(false);

  useEffect(() => {
    if (!loginOpen) {
      setPassword('');
      setError(null);
    }
  }, [loginOpen])

  return (
    <>
      {isLoggedIn ? (
        <button type='button' className={`nes-btn ${style.loginBtn}`} onClick={handleLogout}>
          로그아웃
        </button>
      ) : (
        <>
          <button type='button' className={`nes-btn ${style.loginBtn}`} onClick={() => setLoginOpen(!loginOpen)}>
            로그인하기
          </button>

          {loginOpen && (
            <form className={`nes-container ${style.login}`} onSubmit={handleSubmit}>
              <input
                type="password"
                className="nes-input"
                placeholder='비밀번호를 입력하세요'
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <button type='submit' className='nes-btn is-error'>확인</button>
              {error && <p>{error}</p>}
            </form>
          )}
        </>
      )}
    </>
  )
}