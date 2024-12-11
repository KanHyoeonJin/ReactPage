import React, { useRef, useEffect } from 'react';
import './InfoStyle.css';
function Info() {
  const headerRef = useRef(null);

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
    <div className="center-container">
      <div className="info-content">
        <h1 ref={headerRef}>Tourist Attraction</h1>
      </div>
      <h3>Are you looking for more information on tourist attractions?</h3>
      <br></br>
      <h3>Tourist Attractions has been researching tourist attractions</h3>
      <br></br>
      <h3>
        since 1999 and we probably have information on the attraction you are
        looking for.
      </h3>
      <p>
        © 1999 - 2024 Moble All Rights Reserved. Privacy Policy | Terms and
        Conditions
      </p>
    </div>
  );
}

export default Info;
