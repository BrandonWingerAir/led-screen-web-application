import { useContext } from 'react';
import DataContext from '../../../../DataContext.jsx';

const DateInputBox = () => {
  const { state, updateDescriptionDate } = useContext(DataContext);
    
  const handleChange = (event) => {     
    const selectedValue = event.target.value;
    updateDescriptionDate(selectedValue);
  };

  return (
    <div>
      <label htmlFor="led_screen_desc_date">Date</label>
      <input 
        type="date" 
        onChange={handleChange} 
        value={state.descriptionDate}
      />
    </div>
  );
};

export default DateInputBox;
