import './styles/formStepOne.css'
import { useNavigate } from 'react-router-dom'

const FormStepOne = () => {

    const navigate = useNavigate()

    const handleSubmit = () => {
        navigate('/2')
    }

  return (
    <section className='formStepOne'>
      <div className='circles'>
        <i className='bx icon_color bx-radio-circle-marked'></i>

        <i className='bx icon_gray bx-radio-circle-marked'></i>

        <i className='bx icon_empty bx-radio-circle' ></i>
      
      </div>

      

      <form onSubmit={handleSubmit} className='form'>
            <div className='form_item'> 
                <label className='label'>NOMBRE DEL CLIENTE</label>
                <input className='input_info' type="text" placeholder='Escribe aquí' required/>
            </div>

            <div className='form_item'>
                <label className='label'>APELLIDO DEL CLIENTE</label>
                <input className='input_info' type="text" placeholder='Escribe aquí' required />
            </div>

            <div className='form_item'>
                <label className='label'>URL DEL LINKEDIN</label>
                <input className='input_info' type="url" placeholder='Escribe aquí' required/>
            </div>

            <div className='form_item'>
                <label className='label'>EMAIL</label>
                <input className='input_info' type="email" placeholder='Escribe aquí' required/>
            </div>

            <div className='form_item'>
                <label className='label'>TELEFONO</label>
                <input className='input_info' type="tel" placeholder='Escribe aquí' required/>
            </div>

            <div className='form_item'>
                <label className='label'>FECHA DE NACIMIENTO</label>
                <input className='input_info' type="date" placeholder='Escribe aquí' required/>
            </div>

            <button type='submit' className='btn'>SIGUIENTE</button>
        </form>
    </section>
  )
}

export default FormStepOne