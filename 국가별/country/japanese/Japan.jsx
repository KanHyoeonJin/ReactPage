import React from 'react';
import { useNavigate } from 'react-router-dom';

function Japan() {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/japan');
  };

  return (
    <div className="image-item Japan" onClick={handleClick}>
      <img
        src={`${process.env.PUBLIC_URL}/Japan.png`}
        alt="The Great Wall of China"
        className="special-effect"
      />
    </div>
  );
}

export default Japan;
