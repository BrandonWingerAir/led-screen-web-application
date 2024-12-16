import { useContext } from 'react';
import DataContext from '../../../../DataContext.jsx';
import ReceptacleBoxDimensions from './ReceptacleBoxDimensions/ReceptacleBoxDimensions.jsx';
import "./ResultsNotes.css";

function ResultsNotes() {
  const { state } = useContext(DataContext);

  return (
    <div id="led-screens-config-notes">
      <div>
        <h2>Notes</h2>
        <p>Install recessed receptacle box with:</p>
        <p>2x Terminated Power Outlets</p>
        <p>1x Terminated Data CAT5 Ethernet Outlet</p>
      </div>
      <ReceptacleBoxDimensions/>
    </div>
  )
}

export default ResultsNotes;
  