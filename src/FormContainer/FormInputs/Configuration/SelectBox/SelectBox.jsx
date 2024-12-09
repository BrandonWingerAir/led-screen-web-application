import { useContext } from 'react';
import DataContext from './../../../../DataContext.jsx';

const SelectBox = () => {
  const { state, updateSelectedScreen } = useContext(DataContext);
  
  const data = state.data;
  
  const handleChange = (event) => {     
    const selectedValue = event.target.value;
    updateSelectedScreen(selectedValue);
  };

  console.log(state.data[0]);
  

  const firstPropertyValues = Array.isArray(data) && data.map(item => Object.values(item)[0]);

  return (
    <select onChange={handleChange}> 
        <option value={state.data[0]}>Choose Model</option> 
        {Array.isArray(data) && firstPropertyValues.map((value, index) => ( 
            <option key={index} value={value}> {value} </option>
        ))} 
    </select>
  );
};

export default SelectBox;
