import { useContext } from 'react';
import DataContext from '../../../../DataContext.jsx';
import "./DescriptionResults.css";
  
function DescriptionResults() {
  const { state } = useContext(DataContext);

  return (
    <div id='led-screens-installation-desc'>
      <div className="led-screens-desc-header">
        <div>
          Logo
        </div>
        <div>
          <div>
            <p>Address</p>
            <p>Location</p>
            <p>Phone Number</p>
          </div>
        </div>
        <div>
          <div>
            <h3>Description:</h3>
            <p className='led-screens-results-title'>
              {state.descTitle}
            </p>
          </div>
        </div>
      </div>

      <div className="led-screens-desc-grid">
        <div>
          <div>
            <p>Drawn:</p>
          </div>
          <div>
            {state.drawer}
          </div>
        </div>
        <div className='led-screens-desc-units'>
          <p>Dimensions in inches</p>
        </div>
        <div>
          <div className='led-screens-desc-diagram'>
            {/* Image Here */}
          </div>
        </div>
        <div>
          <div>
            <p>Screen Size:</p>
          </div>
          <div>
            {state.screenSizeDesc}
          </div>
        </div>
        <div>
          <div>
            <p>Date</p>
          </div>
          <div>
            {state.descriptionDate}
          </div>
        </div>
        <div>
          <div>
            <p>Sheet</p>
          </div>
          <div>
            <p>1 of 1</p>
          </div>
        </div>
        <div>
          <div>
            <p>Revision</p>
          </div>
          <div>
            00
          </div>
        </div>
        <div>
          <div>
            <p>Department</p>
          </div>
          <div>
            <p>{state.department}</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default DescriptionResults;
  