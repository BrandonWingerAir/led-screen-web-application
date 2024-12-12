import { useContext } from 'react';
import DataContext from '../../../../DataContext.jsx';

const SelectMediaPlayer = () => {
  const { state, updateSelectedMediaPlayer } = useContext(DataContext);
  
  const mediaPlayers = state.mediaPlayers;
  
  const handleChange = (event) => {     
    const selectedValue = event.target.value;
    updateSelectedMediaPlayer(selectedValue);
  };
  
  const firstPropertyValues = Array.isArray(mediaPlayers) && mediaPlayers.map(item => Object.values(item)[0]);

  return (
    <div>
      <label htmlFor="led_screens_select_media_player">Media Player</label>
      <select onChange={handleChange}> 
          {Array.isArray(mediaPlayers) && firstPropertyValues.map((value, index) => ( 
              <option key={index} value={value}> {value} </option>
          ))} 
      </select>
    </div>
  );
};

export default SelectMediaPlayer;
