import React from 'react';

function Spring() {
  return (
    <div className="image-item Spring">
      <img
        src={`${process.env.PUBLIC_URL}/Spring.jpg`}
        alt="Description for Spring_2"
        className="special-effect"
      />
    </div>
  );
}

export default Spring;