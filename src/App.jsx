import './App.css'
import Header from './Header/Header'
import FormContainer from './FormContainer/FormContainer'
import { DataProvider } from './DataContext.jsx';

function App() {
  return (
    <DataProvider>
      <Header/>
      <FormContainer/>
    </DataProvider>
  )
}

export default App
