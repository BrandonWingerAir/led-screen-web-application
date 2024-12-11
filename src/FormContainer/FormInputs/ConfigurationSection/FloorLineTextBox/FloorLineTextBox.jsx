import { useContext } from 'react';
import DataContext from '../../../../DataContext.jsx';

const FloorLineTextBox = () => {
  const { state, updateFloorLine } = useContext(DataContext);
    
  const handleChange = (event) => {     
    const selectedValue = event.target.value;
    updateFloorLine(selectedValue);
  };

  return (
    <div>
      <label htmlFor="led_screen_floor_line">Floor Line Height (In.)</label>
      <input type="text" onChange={handleChange} value={state.floorLine}/> "
    </div>
  );
};

export default FloorLineTextBox;
