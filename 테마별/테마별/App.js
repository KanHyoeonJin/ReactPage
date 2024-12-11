import React, { useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './index.css';
import VacationSpots from './ProjectReact/VacationSpots';
import Tourism from './ProjectReact/Tourism';
import Activity from './ProjectReact/Activity';
import GourmetTrip from './ProjectReact/GourmetTrip';


function App() {
  return (
    <div className="app-container">
      <div className="travel-container">
        <VacationSpots />
        <Tourism />
        <Activity />
        <GourmetTrip />
      </div>
    </div>
  );
}

export default App;
