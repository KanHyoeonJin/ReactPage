import React from 'react';

function Activity() {
  return (
    <div className="image-item Activity">
      <img
        src={`${process.env.PUBLIC_URL}/Activity_2.jpg`}
        alt="Description for Activity"
        className="special-effect"
      />
    </div>
  );
}

export default Activity;
