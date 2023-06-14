import React from 'react'
import './styles/successfully.css'
import successfully from '../../public/images/successfully.jpeg'

const Succesfully = () => {
  return (
    <section className='successfully'>
      <div className='circles'>
        <i className='bx icon_check bxs-check-circle'></i>

        <i className='bx icon_check bxs-check-circle'></i>

        <i className='bx icon_color bx-radio-circle-marked' ></i>
      </div>


      <div className='image_container'>
        <img className='imageFinal' src={successfully} alt="" />
        <h1 className='textFinal'>¡Tu formulario fue subido con exito!</h1>
      </div>

    </section>
  )
}

export default Succesfully