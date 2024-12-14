import { useContext } from 'react';
import DataContext from '../../../../../DataContext.jsx';

function ScreenDimensions() {
  const { state } = useContext(DataContext);

  let screenHeight = 0;
  let screenWidth = 0;
  
  if (state.orientation == 'horizontal') {
    screenHeight = state.selectedScreen.Height;
    screenWidth = state.selectedScreen.Width;  
  } else {
    screenHeight = state.selectedScreen.Width;
    screenWidth = state.selectedScreen.Height; 
  }
  
  return (
    <div className='led-screens-result-dimensions'>
      <h2>Screen Dimensions:</h2>
      <div className="led-screens-dimension-grid">
        <p>Height</p>
        <p>{screenHeight}"</p>
      </div>
      <div className="led-screens-dimension-grid">
        <p>Width</p>
        <p>{screenWidth}"</p>
      </div>
      <div className="led-screens-dimension-grid">
        <p>Floor Line</p>
        <p>{state.floorLine}"</p>
      </div>
    </div>
  )
}
  
export default ScreenDimensions
  