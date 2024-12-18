import { useContext } from 'react';
import DataContext from '../../../../DataContext.jsx';

const OrientationRadioBtn = () => {
  const { state, updateOrientation } = useContext(DataContext);
    
  const handleChange = (event) => {     
    const selectedValue = event.target.value;
    updateOrientation(selectedValue);
  };

  return (
    <div className='led-screens-radio-toggle'>
      <form onChange={handleChange} className='led-screens-config-grid'>
        <div className={ state.orientation == "vertical" ? 'led-screens-selected-radio' : '' }>
            <input type="radio" name="led_screens_radio_toggle" value="vertical"/>
            <label htmlFor="vertical">Vertical</label>
        </div>
        <div className={ state.orientation == "horizontal" ? 'led-screens-selected-radio' : '' }>
            <input type="radio" name="led_screens_radio_toggle" value="horizontal" defaultChecked/>
            <label htmlFor="horizontal">Horizontal</label>
        </div>
      </form>
    </div>
  );
};

export default OrientationRadioBtn;
