import './css/CountryStyle.css';

import Korea from './korean/Korea';
import China from './chinese/China';
import Japan from './japanese/Japan';
import Image4 from './image5/Image5';
import Image5 from './image6/Image6';
import Image6 from './image7/Image7';
import Image7 from './image8/Image8';
import Image8 from './image9/Image9';
import Image9 from './image9/Image9';

function Country() {
  return (
    <>
      <div className="app-container">
        <div className="travel-container">
          <Korea />
          <China />
          <Japan />
          <Image4 />
          <Image5 />
          <Image6 />
          <Image7 />
          <Image8 />
          <Image9 />
        </div>
      </div>
    </>
  );
}

export default Country;
