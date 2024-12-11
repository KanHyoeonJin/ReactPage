import React from 'react';
import { useNavigate } from 'react-router-dom';

function Korea() {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/korea');
  };

  return (
    <div className="image-item Korea" onClick={handleClick}>
      <img
        src={`${process.env.PUBLIC_URL}/Korea.jpg`}
        alt="Korea"
        className="special-effect"
      />
    </div>
  );
}

export default Korea;
