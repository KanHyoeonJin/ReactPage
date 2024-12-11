import React, { useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './index.css';
import Korea from './ProjectReact/Korea';
import China from './ProjectReact/China';
import Image3 from './ProjectReact/Image3';
import Image4 from './ProjectReact/Image4';
import Image5 from './ProjectReact/Image5';
import Image6 from './ProjectReact/Image6';
import Image7 from './ProjectReact/Image7';
import Image8 from './ProjectReact/Image8';
import Image9 from './ProjectReact/Image9';

function LoginCompletePage() {
  const headerRef = useRef(null); // h1 요소를 위한 ref 생성

  const handleButtonClick = () => {
    window.location.href = 'https://twitter.com'; // 트위터 홈페이지로 이동
  };

  useEffect(() => {
    const header = headerRef.current;

    const handleMouseMove = (e) => {
      const { clientX, clientY } = e;
      const centerX = window.innerWidth / 2;
      const centerY = window.innerHeight / 2;
      const deltaX = clientX - centerX;
      const deltaY = clientY - centerY;

      // 3D 회전 효과 적용
      const rotateX = (deltaY / centerY) * 50; // Y축 움직임에 따라 X축 회전
      const rotateY = (deltaX / centerX) * 50; // X축 움직임에 따라 Y축 회전

      header.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <div className="app-container">
      <div className="header-content">
        <h1 ref={headerRef}>Tourist Attraction</h1>
      </div>
      <header className="app-header">
        {/* <button className="login-button">로그인</button> */}
        현재 로그인 상태입니다.
      </header>
      <div className="travel-container">
        <Korea />
        <China />
        <Image3 />
        <Image4 />
        <Image5 />
        <Image6 />
        <Image7 />
        <Image8 />
        <Image9 />
      </div>
      <div className="button-container">
        <Link to="/service">
          <button className="image-button">
            <img src="img/Service.png" alt="Service" />
          </button>
        </Link>
        <Link to="/twitter">
          <button className="image-button" onClick={handleButtonClick}>
            <img src="img/twit.png" alt="twitter" />
          </button>
        </Link>
        <Link to="/info">
          <button className="image-button">
            <img src="img/information.png" alt="info" />
          </button>
        </Link>
      </div>
    </div>
  );
}

export default LoginCompletePage;
