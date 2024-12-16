import { useContext } from 'react';
import DataContext from '../../../../DataContext.jsx';

const TitleTextBox = () => {
  const { state, updateDescTitle } = useContext(DataContext);
    
  const handleChange = (event) => {     
    const selectedValue = event.target.value;
    updateDescTitle(selectedValue);
  };

  return (
    <div>
      <label htmlFor="led_screen_desc_title">Title</label>
      <input 
        type="text" 
        onChange={handleChange} 
        value={state.descTitle}
        placeholder='Enter Title'
      />
    </div>
  );
};

export default TitleTextBox;
