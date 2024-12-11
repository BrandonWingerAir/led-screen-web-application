import { useContext } from 'react';
import DataContext from '../../../../DataContext.jsx';
  
function Information() {
  const { state } = useContext(DataContext);

  console.log(state.selectedScreen);
  

  return (
    <>
      <p>{state.selectedScreen.Make} {state.selectedScreen.MFR}</p>
    </>
  )
}

export default Information
  