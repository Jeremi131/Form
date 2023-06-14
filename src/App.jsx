import './App.css'
import { Route, Routes } from 'react-router-dom'
import FormStepOne from './components/formStepOne'
import FormStepTwo from './components/FormStepTwo'
import Succesfully from './components/Succesfully'

function App() {

  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<FormStepOne />} />
        <Route path='/2' element={<FormStepTwo/>} />
        <Route path='/successfully' element={<Succesfully/>} />


      </Routes>

    </div>
  )
}

export default App
