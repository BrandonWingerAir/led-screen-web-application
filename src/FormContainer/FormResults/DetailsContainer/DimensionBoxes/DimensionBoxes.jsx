import { useContext } from 'react';
import DataContext from '../../../../DataContext';
import "./DimensionBoxes.css";
import NicheDimensions from './NicheDimensions/NicheDimensions';
import ScreenDimensions from "./ScreenDimensions/ScreenDimensions";

function DimensionBoxes() {
  const { state } = useContext(DataContext);
  
    return (
      <div 
        id='led-screens-dimension-boxes'
        className='led-screens-dimension-boxes'
      >
        <NicheDimensions/>
        <ScreenDimensions/>
      </div>
    )
}
  
export default DimensionBoxes
  