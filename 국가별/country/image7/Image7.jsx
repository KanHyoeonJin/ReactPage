import React from 'react';

function Image7() {
  const handleClick = () => {};

  return (
    <div className="image-item image7" onClick={handleClick}>
      <img
        src={`${process.env.PUBLIC_URL}/image7.jpg`}
        alt="Description for Image 7"
        className="special-effect"
      />
    </div>
  );
}

export default Image7;
