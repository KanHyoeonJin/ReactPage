import React from 'react';

function Summer() {
  return (
    <div className="image-item Summer">
      <img
        src={`${process.env.PUBLIC_URL}/Summer.jpg`}
        alt="Description for Summer_2"
        className="special-effect"
      />
    </div>
  );
}

export default Summer;