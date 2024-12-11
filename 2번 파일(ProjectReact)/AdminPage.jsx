import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './LoginSignUpStyle.css'; // CSS 스타일 적용

function AdminPage() {
  const [userIdToDelete, setUserIdToDelete] = useState('');
  const navigate = useNavigate();

  const handleDelete = () => {
    // 로컬 스토리지에서 사용자 데이터 배열을 불러옴
    let users = JSON.parse(localStorage.getItem('userData')) || [];

    // 삭제할 아이디가 있는지 확인하고 해당 아이디 제거
    const filteredUsers = users.filter(
      (user) => user.userId !== userIdToDelete
    );
    if (filteredUsers.length === users.length) {
      alert('존재하지 않는 아이디입니다.');
    } else {
      localStorage.setItem('userData', JSON.stringify(filteredUsers)); // 업데이트된 배열 저장
      alert('아이디가 삭제되었습니다.');
    }
  };

  const handleBack = () => {
    navigate('/login'); // 로그인 페이지로 돌아가기
  };

  return (
    <div className="login-container">
      <form className="login-form">
        <input
          type="text"
          value={userIdToDelete}
          onChange={(e) => setUserIdToDelete(e.target.value)}
          placeholder="삭제할 아이디 입력"
          className="login-input"
        />
        <div className="login-buttons">
          <button onClick={handleDelete} className="button">
            삭제
          </button>
          <button onClick={handleBack} className="button">
            뒤로 가기
          </button>
        </div>
      </form>
    </div>
  );
}

export default AdminPage;
