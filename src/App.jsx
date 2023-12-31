
import './index.scss'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import FormRegister from "./pages/FormRegister/FormRegister"
import Form from './pages/Form/Form'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Form/>}/>
        <Route path='/Register' element={<FormRegister/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
