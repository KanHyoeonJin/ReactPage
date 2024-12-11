import React from 'react';

function Tourism() {
  return (
    <div className="image-item Tourism">
      <img
        src={`${process.env.PUBLIC_URL}/Tourism_2.jpg`}
        alt="Description for Tourism"
        className="special-effect"
      />
    </div>
  );
}

export default Tourism;
