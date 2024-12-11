import React, { useState } from 'react';


function Image9() {
  const [State, setState] = useState({display:'none'})
  const handleClick = () => {
    
  };


  return (
    <div className="image-item image9" onClick={handleClick}>
      <img
        src={`${process.env.PUBLIC_URL}/image9.jpg`}
        alt="Description for Image 9"
        className="special-effect"
      />
    </div>
  );
}

export default Image9;
