import "./DimensionBoxes.css";
import NicheDimensions from './NicheDimensions/NicheDimensions';
import ScreenDimensions from "./ScreenDimensions/ScreenDimensions";

function DimensionBoxes() {  
    return (
      <div 
        id='led-screens-dimension-boxes'
        className='led-screens-dimensions-container'
      >
        <NicheDimensions/>
        <ScreenDimensions/>
      </div>
    )
}
  
export default DimensionBoxes
  