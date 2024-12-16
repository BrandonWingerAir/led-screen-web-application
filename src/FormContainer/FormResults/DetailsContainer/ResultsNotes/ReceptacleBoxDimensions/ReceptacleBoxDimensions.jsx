import { useContext } from 'react';
import DataContext from '../../../../../DataContext.jsx';

function ReceptacleBoxDimensions() {
  const { state } = useContext(DataContext);

  return (
    <div>
      <div className="led-screens-dimension-grid">
        <p>Height</p>
        <p>{state.selectedReceptacleBox.Height}"</p>
      </div>
      <div className="led-screens-dimension-grid">
        <p>Width</p>
        <p>{state.selectedReceptacleBox.Width}"</p>
      </div>
      <div className="led-screens-dimension-grid">
        <p>Depth</p>
        <p>{state.selectedReceptacleBox.Depth}"</p>
      </div>
    </div>
  )
}
  
export default ReceptacleBoxDimensions;
  