import { useContext } from 'react';
import DataContext from '../../../../DataContext.jsx';
  
function Information() {
  const { state } = useContext(DataContext);

  return (
    <div id='led-screens-installation-desc'>
      <p>{state.selectedScreen.Make} {state.selectedScreen.MFR}</p>
    </div>
  )
}

export default Information
  