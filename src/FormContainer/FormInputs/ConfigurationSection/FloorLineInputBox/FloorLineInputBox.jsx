import { useContext } from 'react';
import DataContext from '../../../../DataContext.jsx';

const FloorLineInputBox = () => {
  const { state, updateFloorLine } = useContext(DataContext);
    
  const handleChange = (event) => {     
    const selectedValue = event.target.value;
    updateFloorLine(selectedValue);
  };

  return (
    <div className='led-screens-config-grid'>
      <div className='led-screens-floor-input-label'>
        <label htmlFor="led_screen_floor_line">Floor Distance</label>
      </div>
      <div>
        <input 
          type="number" 
          onChange={handleChange} 
          value={state.floorLine}
          className='led-screens-number-input'
        />
        <span className='led-screens-input-inches'>"</span>
      </div>
    </div>
  );
};

export default FloorLineInputBox;
