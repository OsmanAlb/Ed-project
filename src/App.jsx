import Form from './components/Form/Form'
import FormRegister from './components/Form/FormRegister/FormRegister'
import './index.scss'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

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
