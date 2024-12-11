import React from 'react';

function JapanPage() {
  return (
    <div>
      <h1>The Great Wall of China</h1>
      <img
        src={`${process.env.PUBLIC_URL}/China.jpg`}
        alt="The Great Wall of japan"
        style={{ maxWidth: '100%', height: 'auto' }}
      />
      <p>Here is some information about The Great Wall of japan...</p>
    </div>
  );
}

export default JapanPage;
