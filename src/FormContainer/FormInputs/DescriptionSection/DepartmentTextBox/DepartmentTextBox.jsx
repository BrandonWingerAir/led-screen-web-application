import { useContext } from 'react';
import DataContext from '../../../../DataContext.jsx';

const DepartmentTextBox = () => {
  const { state, updateDepartment } = useContext(DataContext);
    
  const handleChange = (event) => {     
    const selectedValue = event.target.value;
    updateDepartment(selectedValue);
  };

  return (
    <div>
      <label htmlFor="led_screen_department">Department</label>
      <input 
        type="text" 
        onChange={handleChange} 
        value={state.department}
        placeholder='Enter Department'
      />
    </div>
  );
};

export default DepartmentTextBox;
