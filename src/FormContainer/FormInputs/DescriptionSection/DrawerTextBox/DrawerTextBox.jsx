import { useContext } from 'react';
import DataContext from '../../../../DataContext.jsx';

const DrawerTextBox = () => {
  const { state, updateDrawer } = useContext(DataContext);
    
  const handleChange = (event) => {     
    const selectedValue = event.target.value;
    updateDrawer(selectedValue);
  };

  return (
    <div>
      <label htmlFor="led_screen_floor_line">Drawer</label>
      <input 
        type="text" 
        onChange={handleChange} 
        value={state.drawer}
        placeholder='Enter Name'
      />
    </div>
  );
};

export default DrawerTextBox;
