import { useContext } from 'react';
import DataContext from '../../../../DataContext.jsx';

const ScreenSizeTextBox = () => {
  const { state, updateScreenSizeDesc } = useContext(DataContext);
    
  const handleChange = (event) => {     
    const selectedValue = event.target.value;
    updateScreenSizeDesc(selectedValue);
  };

  return (
    <div>
      <label htmlFor="led_screen_screen_size">Screen Size</label>
      <input 
        type="text" 
        onChange={handleChange} 
        value={state.screenSizeDesc}
        placeholder='Enter Screen Size'
      />
    </div>
  );
};

export default ScreenSizeTextBox;
