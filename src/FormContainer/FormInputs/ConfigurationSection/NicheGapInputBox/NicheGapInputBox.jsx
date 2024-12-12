import { useContext } from 'react';
import DataContext from '../../../../DataContext.jsx';

const NicheGapInputBox = () => {
  const { state, updateNicheGap } = useContext(DataContext);
    
  const handleChange = (event) => {     
    const selectedValue = event.target.value;
    updateNicheGap(selectedValue);
  };

  return (
    <>
      {state.wallType == 'Niche' ? (
        <div>
          <label htmlFor="led_screen_niche_gap">Niche Depth Var</label>
          <input type="number" onChange={handleChange} value={state.nicheGap}/>
        </div>
      ) : (
        <div>
          <label htmlFor="led_screen_niche_gap">Niche Depth Var</label>
          <input type="number" onChange={handleChange} value={state.nicheGap} disabled/>
        </div>
      )}
    </>
  );
};

export default NicheGapInputBox;