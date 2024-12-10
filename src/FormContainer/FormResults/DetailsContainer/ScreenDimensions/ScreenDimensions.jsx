import { useContext } from 'react';
import DataContext from '../../../../DataContext.jsx';
import "./ScreenDimensions.css";

function ScreenDimensions() {
  const { state } = useContext(DataContext);
  
    return (
      <div className='led-screens-result-dimensions'>
        <h2>Screen Dimensions:</h2>
        <div className="led-screens-dimension-grid">
          <p>Height</p>
          <p>{state.selectedScreen.Height}"</p>
        </div>
        <div className="led-screens-dimension-grid">
          <p>Width</p>
          <p>{state.selectedScreen.Width}"</p>
        </div>
      </div>
    )
}
  
export default ScreenDimensions
  