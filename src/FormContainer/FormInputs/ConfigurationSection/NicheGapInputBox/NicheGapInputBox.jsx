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
        <div className='led-screens-config-grid'>
          <div className='led-screens-floor-input-label'>
            <label htmlFor="led_screen_niche_gap">Niche Depth Var</label>
          </div>
          <div>
            <input 
              type="number" 
              onChange={handleChange} 
              value={state.nicheGap}
              className='led-screens-number-input'
            />
            <span className='led-screens-input-inches'>"</span>
          </div>
        </div>
      ) : (
        <div className='led-screens-config-grid'>
          <div className='led-screens-floor-input-label'>
            <label htmlFor="led_screen_niche_gap">Niche Depth Var</label>
          </div>
          <div>
            <input 
              type="number" 
              onChange={handleChange} 
              value={state.nicheGap}
              className='led-screens-number-input'
              disabled
            />
            <span className='led-screens-input-inches'>"</span>
          </div>
        </div>
      )}
    </>
  );
};

export default NicheGapInputBox;
