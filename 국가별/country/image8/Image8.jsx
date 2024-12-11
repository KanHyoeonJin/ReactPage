import React from 'react';

function Image8() {
  const handleClick = () => {};

  return (
    <div className="image-item image8" onClick={handleClick}>
      <img
        src={`${process.env.PUBLIC_URL}/image8.jpg`}
        alt="Description for Image 8"
        className="special-effect"
      />
    </div>
  );
}

export default Image8;
