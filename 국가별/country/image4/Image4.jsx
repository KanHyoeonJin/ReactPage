import React from 'react';

function Image4() {
  const handleClick = () => {};

  return (
    <div className="image-item image4" onClick={handleClick}>
      <img
        src={`${process.env.PUBLIC_URL}/image4.jpg`}
        alt="Description for Image 4"
        className="special-effect"
      />
    </div>
  );
}

export default Image4;
