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
      <label>Outer Gap</label>
      <form onChange={handleChange}>
        <div>
            <input type="radio" name="led_screens_wall_type" value="niche" defaultChecked/>
            <label for="niche">Niche</label>
        </div>
        <div>
            <input type="radio" name="led_screens_wall_type" value="flatWall"/>
            <label for="flatWall">Flat Wall</label>
        </div>
      </form>
    </div>
  );
};

export default NicheRadioBtn;
