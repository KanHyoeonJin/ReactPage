import React from 'react';

function Fall() {

  return (
    <div className="image-item Fall">
      <img
        src={`${process.env.PUBLIC_URL}/Fall.jpg`}
        alt="Description for Fall"
        className="special-effect"
      />
    </div>
  );
}

export default Fall;