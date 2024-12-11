import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './LoginSignUpStyle.css';

function SignUpPage() {
  const [userId, setUserId] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const navigate = useNavigate();

  const handleSignUp = (event) => {
    event.preventDefault();
    // 로컬 스토리지에서 사용자 데이터 배열을 불러옴
    const existingUsers = JSON.parse(localStorage.getItem('userData')) || [];

    // 중복 아이디 검사
    if (existingUsers.some((user) => user.userId === userId)) {
      alert('이미 가입된 아이디입니다.');
      return;
    }

    // 새 사용자 정보 추가
    const userData = { userId, password, email };
    existingUsers.push(userData);
    localStorage.setItem('userData', JSON.stringify(existingUsers)); // 업데이트된 배열 저장

    alert('회원가입이 완료되었습니다.');
    navigate('/login'); // 로그인 페이지로 이동
  };

  return (
    <div className="login-container">
      <form onSubmit={handleSignUp} className="login-form">
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
        <label htmlFor="email">이메일</label>
        <input
          id="email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          className="login-input"
        />
        <button type="submit" className="button">
          회원가입
        </button>
      </form>
    </div>
  );
}

export default SignUpPage;
