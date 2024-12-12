import { useContext } from 'react';
import DataContext from '../../../../DataContext.jsx';
  
function Information() {
  const { state } = useContext(DataContext);

  return (
    <div id='led-screens-installation-desc'>
      <p>Drawn: {state.drawer}</p>
    </div>
  )
}

export default Information
  