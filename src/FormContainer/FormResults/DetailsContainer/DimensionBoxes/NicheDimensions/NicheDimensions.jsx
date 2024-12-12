import { useContext } from 'react';
import DataContext from '../../../../../DataContext.jsx';

function NicheDimensions() {
  const { state } = useContext(DataContext);

  let nicheHeight = 0;
  let nicheWidth = 0;
  
  if (state.orientation == 'horizontal') {
    nicheHeight = parseFloat(state.selectedScreen.Height) + parseFloat(state.nicheGap);
    nicheWidth = parseFloat(state.selectedScreen.Width) + parseFloat(state.nicheGap);  
  } else {
    nicheHeight = parseFloat(state.selectedScreen.Width) + parseFloat(state.nicheGap);
    nicheWidth = parseFloat(state.selectedScreen.Height) + parseFloat(state.nicheGap); 
  }

  return (
    <div className='led-screens-result-dimensions'>
      <h2>Niche Dimensions:</h2>
      <div className="led-screens-dimension-grid">
        <p>Height</p>
        <p>{nicheHeight}"</p>
      </div>
      <div className="led-screens-dimension-grid">
        <p>Width</p>
        <p>{nicheWidth}"</p>
      </div>
      <div className="led-screens-dimension-grid">
        <p>Depth</p>
        {/* Screen depth + Max(Media player depth, Mount depth) + Depth variance */}
        <p>{state.totalDepth}"</p>
      </div>
    </div>
  )
}
  
export default NicheDimensions;
  