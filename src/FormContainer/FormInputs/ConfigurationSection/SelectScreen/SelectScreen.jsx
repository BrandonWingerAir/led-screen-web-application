import { useContext } from 'react';
import DataContext from '../../../../DataContext.jsx';

const SelectScreen = () => {
  const { state, updateSelectedScreen } = useContext(DataContext);
  
  const screens = state.screens;
  
  const handleChange = (event) => {     
    const selectedValue = event.target.value;
    updateSelectedScreen(selectedValue);
  };
  
  const firstPropertyValues = Array.isArray(screens) && screens.map(item => Object.values(item)[0]);

  return (
    <div>
      <label htmlFor="led_screen">Screen</label>
      <select onChange={handleChange}> 
          <option value={screens[0]}>Choose Model</option> 
          {Array.isArray(screens) && firstPropertyValues.map((value, index) => ( 
              <option key={index} value={value}> {value} </option>
          ))}
      </select>
    </div>
  );
};

export default SelectScreen;
