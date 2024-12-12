import { useContext } from 'react';
import DataContext from '../../../../DataContext.jsx';
import "./OrientationRadioBtn.css";

const OrientationRadioBtn = () => {
  const { state, updateOrientation } = useContext(DataContext);
    
  const handleChange = (event) => {     
    const selectedValue = event.target.value;
    updateOrientation(selectedValue);
  };

  return (
    <div className='led-screens-wall-type'>
      <form onChange={handleChange}>
        <div>
            <input type="radio" name="led_screens_orientation_radio" value="vertical"/>
            <label htmlFor="vertical">Vertical</label>
        </div>
        <div>
            <input type="radio" name="led_screens_orientation_radio" value="horizontal" defaultChecked/>
            <label htmlFor="horizontal">Horizontal</label>
        </div>
      </form>
    </div>
  );
};

export default OrientationRadioBtn;
