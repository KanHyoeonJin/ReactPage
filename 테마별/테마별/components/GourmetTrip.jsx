import React from 'react';

function GourmetTrip() {
  return (
    <div className="image-item GourmetTrip">
      <img
        src={`${process.env.PUBLIC_URL}/GourmetTrip_3.jpg`}
        alt="Description for GourmetTrip"
        className="special-effect"
      />
    </div>
  );
}

export default GourmetTrip;
