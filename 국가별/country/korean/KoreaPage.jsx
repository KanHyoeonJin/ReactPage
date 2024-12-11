import React from 'react';

function KoreaPage() {
  return (
    <div>
      <h1>The Great Wall of China</h1>
      <img
        src={`${process.env.PUBLIC_URL}/China.jpg`}
        alt="The Great Wall of korea"
        style={{ maxWidth: '100%', height: 'auto' }}
      />
      <p>Here is some information about The Great Wall of Korea...</p>
    </div>
  );
}

export default KoreaPage;
