import { useContext } from 'react';
import DataContext from '../../../../DataContext.jsx';

const SelectReceptacleBox = () => {
  const { state, updateSelectedReceptacleBox } = useContext(DataContext);
  
  const receptacleBoxes = state.receptacleBoxes;
  
  const handleChange = (event) => {     
    const selectedValue = event.target.value;
    updateSelectedReceptacleBox(selectedValue);
  };
  
  const firstPropertyValues = Array.isArray(receptacleBoxes) && receptacleBoxes.map(item => Object.values(item)[0]);

  return (
    <div>
      <label htmlFor="led_screens_select_media_player">Receptacle Box</label>
      <select onChange={handleChange}> 
          {Array.isArray(receptacleBoxes) && firstPropertyValues.map((value, index) => ( 
              <option key={index} value={value}> {value} </option>
          ))} 
      </select>
    </div>
  );
};

export default SelectReceptacleBox;
