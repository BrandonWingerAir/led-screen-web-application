import './App.css'
import Header from './Header/Header'
import FormContainer from './FormContainer/FormContainer'
import { DataProvider } from './DataContext.jsx';

function App() {
  // const data = useSelector((state) => state.data); const dispatch = useDispatch(); useEffect(() => {
  //   const fetchData = async () => { 
  //     const response = await fetch('./data.json'); 
  //     const jsonData = await response.json(); 
  //     dispatch(setData(jsonData)); 
  //   };
    
  //   fetchData(); }, [dispatch]);

  return (
    <DataProvider>
      <Header/>
      <FormContainer/>
    </DataProvider>
  )
}

export default App
