import { useContext } from 'react';
import DataContext from '../../../../DataContext.jsx';

const FloorLineInputBox = () => {
  const { state, updateFloorLine } = useContext(DataContext);
    
  const handleChange = (event) => {     
    const selectedValue = event.target.value;
    updateFloorLine(selectedValue);
  };

  return (
    <div>
      <label htmlFor="led_screen_floor_line">Floor Distance</label>
      <input type="number" onChange={handleChange} value={state.floorLine}/>
    </div>
  );
};

export default FloorLineInputBox;
