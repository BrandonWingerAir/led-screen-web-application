import './App.css'
import Header from './Header/Header'
import FormContainer from './FormContainer/FormContainer'

import React, { useEffect } from 'react'; import { useSelector, useDispatch } from 'react-redux'; import { setData } from './actions'

function App() {
  const data = useSelector((state) => state.data); const dispatch = useDispatch(); useEffect(() => { // Assume fetchData is a function that fetches your JSON data 
    const fetchData = async () => { 
      const response = await fetch('/path/to/data.json'); 
      const jsonData = await response.json(); 
      dispatch(setData(jsonData)); 
    }; 
    
    fetchData(); }, [dispatch]);

  return (
    <>
      <Header/>
      <FormContainer/>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </>
  )
}

export default App
