import { useContext } from 'react';
import DataContext from '../../../../../DataContext.jsx';

function NicheDimensions() {
  const { state } = useContext(DataContext);

  const nicheHeight = parseInt(state.selectedScreen.Height) + state.nicheGap;
  const nicheWidth = parseInt(state.selectedScreen.Width) + state.nicheGap;
  
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
    </div>
  )
}
  
export default NicheDimensions;
  