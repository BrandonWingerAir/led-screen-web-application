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
          Company Info
        </div>
        <h2>Description: {state.descTitle}</h2>
      </div>

      <div className="led-screens-desc-grid">
        <div>
          <p>Drawn: {state.drawer}</p>
        </div>
        <div>
          <p>Dimensions in inches</p>
        </div>
        <div>
          <p>Visualization</p>
        </div>
        <div>
          <p>Screen Size: {state.screenSizeDesc}</p>
        </div>
        <div>
          <p>Date: {state.descriptionDate}</p>
        </div>
        <div>
          <p>Sheet 1 of 1</p>
        </div>
        <div>
          Revision 00
        </div>
        <div>
          <p>Department: {state.department}</p>
        </div>
      </div>
    </div>
  )
}

export default DescriptionResults;
  