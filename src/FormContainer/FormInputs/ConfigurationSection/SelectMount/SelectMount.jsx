import { useContext } from 'react';
import DataContext from '../../../../DataContext.jsx';

const SelectMount = () => {
  const { state, updateSelectedMount } = useContext(DataContext);
  
  const mounts = state.mounts;
  
  const handleChange = (event) => {     
    const selectedValue = event.target.value;
    updateSelectedMount(selectedValue);
  };
  
  const firstPropertyValues = Array.isArray(mounts) && mounts.map(item => Object.values(item)[0]);

  return (
    <div>
      <label htmlFor="led_mount">Mount</label>
      <select onChange={handleChange}> 
          <option value={mounts[0]}>Choose Mount</option> 
          {Array.isArray(mounts) && firstPropertyValues.map((value, index) => ( 
              <option key={index} value={value}> {value} </option>
          ))} 
      </select>
    </div>
  );
};

export default SelectMount;
