import React, { useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './index.css';
import Spring from './ProjectReact/Spring';
import Summer from './ProjectReact/Summer';
import Fall from './ProjectReact/Fall';
import Winter from './ProjectReact/Winter';


function App() {
  return (
    <div className="app-container">
      <div className="travel-container">
        <Spring />
        <Summer />
        <Fall />
        <Winter />
      </div>
    </div>
  );
}

export default App;