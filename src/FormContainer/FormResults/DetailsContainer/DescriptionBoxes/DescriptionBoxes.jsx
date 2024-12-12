import { useContext } from 'react';
import DataContext from '../../../../DataContext.jsx';
  
function DescriptionBoxes() {
  const { state } = useContext(DataContext);

  return (
    <div id='led-screens-installation-desc'>
      <h2>Description</h2>
      <p>Drawn: {state.drawer}</p>
    </div>
  )
}

export default DescriptionBoxes
  