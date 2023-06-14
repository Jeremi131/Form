import React, { useState } from 'react'
import './styles/formStepTwo.css'
import { FileUploader } from 'react-drag-drop-files'
import { useNavigate } from 'react-router-dom';

const FormStepTwo = () => {

  const fileTypes = ["JPG", "PNG", "GIF"];


  const [file, setFile] = useState(null);
  const handleChange = (file) => {
    setFile(file);
  };

  const navigate = useNavigate()


  const handleSend = () => {
    navigate(`/successfully`)
  }

  const handleBack = () => {
    navigate(-2)

  }

  return (
    <section className='formStepTwo'>
      <div className='circles'>
      <i className='bx icon_check bxs-check-circle'></i>

        <i className='bx icon_color bx-radio-circle-marked'></i>

        <i className='bx icon_gray bx-radio-circle-marked' ></i>

      </div>

      <form className='formTwo'>
        <div className='form_item'>
          <label className='label'>SUBE UNA FOTO DEL FRENTE DE TU DNI</label>
          <FileUploader className='input_file' handleChange={handleChange} name="file" types={fileTypes} label="Subir una foto del frente" required />
          <span className='file_text'>Attach file. File size of your documents should not exceed 10MB</span>
        </div>

        <div className='form_item'>
          <label className='label'>SUBE UNA FOTO DEL DORSO DE TU DNI</label>
          <FileUploader className='input_file' handleChange={handleChange} name="file" types={fileTypes} label="Subir una foto del dorso" required />
          <span className='file_text'>Attach file. File size of your documents should not exceed 10MB</span>
        </div>

        <div className='container_check'>
          <input className='check' type="checkbox" placeholder='Escribe aquí' required />
          <span className='check_text'>I want to protect my data by signing an NDA</span>
        </div>

        <div className='btn_container'>
          <button onClick={handleBack} type='submit' className='btn_back'>ATRAS</button>
          <button onClick={handleSend} type='submit' className='btn_send'>ENVIAR</button>
        </div>





      </form>
    </section>
  )
}

export default FormStepTwo