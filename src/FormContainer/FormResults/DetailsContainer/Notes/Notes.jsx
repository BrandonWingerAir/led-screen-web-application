import { useContext } from 'react';
import DataContext from '../../../../DataContext.jsx';

function Notes() {
  const { state } = useContext(DataContext);

  return (
    <div id="led-screens-config-notes">
      <h2>Notes</h2>
    </div>
  )
}

export default Notes
  