import React from 'react'
import './style.css'

const Juego = () => {
  return (
    <div id="juego">
        <div id='arriba'>
            <div id='azul' className='boton'/>
            <div id='rojo'className='boton'/>
        </div>
        <div id='abajo'>
            <div id='verde'className='boton'/>
            <div id='amarillo' className='boton'/>
        </div>
    </div>
  )
}

export default Juego