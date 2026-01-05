import './App.css'
import Dashboard from './Components/Dashboard/Dashboard'
import Form from './Components/Form/Form'
import { Routes, Route } from 'react-router-dom'


function App() {
  
  return (
    <Routes>
      <Route path='/' element={<Form />}/>
      <Route path='/dashboard' element={<Dashboard />}/>
    </Routes>
  )
}

export default App
