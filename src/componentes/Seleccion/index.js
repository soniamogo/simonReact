import React from 'react'

const Seleccion = ({color}) => {
    
  return (
    <div id="juego">
    <div id='arriba'>
        <div id='azul' className={(color==='azul') ? 'boton' : 'boton opacidad'} />
        <div id='rojo'className={(color==='rojo') ? 'boton' : 'boton opacidad'}/>
    </div>
    <div id='abajo'>
        <div id='verde' className={(color==='verde') ? 'boton' : 'boton opacidad'}/>
        <div id='amarillo' className={(color==='amarillo') ? 'boton' : 'boton opacidad'}/>
    </div>
  </div>
  )
}

export default Seleccion