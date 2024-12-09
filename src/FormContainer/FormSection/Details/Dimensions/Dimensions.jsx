import { useContext } from 'react';
import DataContext from './../../../../DataContext.jsx';

function Dimensions() {
  const { state } = useContext(DataContext);
  
    return (
      <>
        <p>Dimensions</p>
        <p>Height {state.selectedScreen.Height}"</p>
        <p>Width {state.selectedScreen.Width}"</p>        
      </>
    )
}
  
  export default Dimensions
  