import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './LoginSignUpStyle.css';

function LoginPage() {
  const [userId, setUserId] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = (event) => {
    event.preventDefault();
    if (userId === 'root' && password === '1234') {
      navigate('/admin'); // 관리자 페이지로 이동
    } else {
      const existingUsers = JSON.parse(localStorage.getItem('userData')) || [];
      const userExists = existingUsers.some(
        (user) => user.userId === userId && user.password === password
      );
      if (userExists) {
        alert('로그인 되었습니다!');
        navigate('/complete'); // 로그인 완료시 로그인 완료 페이지로 이동
      } else {
        alert('해당 아이디는 존재하지 않습니다.');
      }
    }
  };

  const handleSignUpRedirect = () => {
    navigate('/signup'); // 회원가입 페이지로 이동
  };

  return (
    <div className="login-container">
      <form onSubmit={handleLogin} className="login-form">
        <label htmlFor="userId">아이디</label>
        <input
          id="userId"
          type="text"
          value={userId}
          onChange={(e) => setUserId(e.target.value)}
          required
          className="login-input"
        />
        <label htmlFor="password">비밀번호</label>
        <input
          id="password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          className="login-input"
        />
        <button type="submit" className="button">
          로그인
        </button>
        <button type="button" className="button" onClick={handleSignUpRedirect}>
          회원가입
        </button>
      </form>
    </div>
  );
}

export default LoginPage;
