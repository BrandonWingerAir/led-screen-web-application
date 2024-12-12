import { useContext } from 'react';
import DataContext from '../../../../DataContext.jsx';
import "./NicheRadioBtn.css";

const NicheRadioBtn = () => {
  const { state, updateWallType } = useContext(DataContext);
    
  const handleChange = (event) => {     
    const selectedValue = event.target.value;
    updateWallType(selectedValue);
  };

  return (
    <div className='led-screens-wall-type'>
      <form onChange={handleChange}>
        <div>
            <input type="radio" name="led_screens_wall_type" value="Niche" defaultChecked/>
            <label htmlFor="niche">Niche</label>
        </div>
        <div>
            <input type="radio" name="led_screens_wall_type" value="flatWall"/>
            <label htmlFor="flatWall">Flat Wall</label>
        </div>
      </form>
    </div>
  );
};

export default NicheRadioBtn;
