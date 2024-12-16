import { useContext } from 'react';
import DataContext from '../../../../DataContext.jsx';
import "./DescriptionResults.css";
  
function DescriptionResults() {
  const { state } = useContext(DataContext);

  return (
    <div id='led-screens-installation-desc'>
      <h2>Description: {state.descTitle}</h2>
      <p>Drawn: {state.drawer}</p>
      <p>Department: {state.department}</p>
      <p>Screen Size: {state.screenSizeDesc}</p>
      <p>Date: {state.descriptionDate}</p>
    </div>
  )
}

export default DescriptionResults;
  