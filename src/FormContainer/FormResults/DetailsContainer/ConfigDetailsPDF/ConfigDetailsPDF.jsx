import { useContext } from 'react';
import DataContext from '../../../../DataContext';
import "./ConfigDetailsPDF.css";

function ConfigDetailsPDF() {
  const { state } = useContext(DataContext);

  return (
    <div 
      id="led-screens-equip-config"
      className='led-screens-equipment-container'
    >
      <h2>Equipment Configuration</h2>
      <h5>Screen:</h5>
      <p>{state.selectedScreen.Make} {state.selectedScreen.MFR}</p>
      <h5>Media Player:</h5>
      <p>{state.selectedMediaPlayer.Brand} {state.selectedMediaPlayer.MFG}</p>
      <h5>Mount:</h5>
      <p>{state.selectedMount.Brand} {state.selectedMount.MFG}</p>
    </div>
  )
}

export default ConfigDetailsPDF;
  