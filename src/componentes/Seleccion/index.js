import React from 'react'

const Seleccion = ({color, handleClick}) => {
    
  return (
    <div id="juego">
    <div id='arriba'>
        <div id='azul' className={(color==='azul') ? 'boton' : 'boton opacidad'} onClick={()=>{handleClick('azul')}}/>
        <div id='rojo'className={(color==='rojo') ? 'boton' : 'boton opacidad'} onClick={()=>{handleClick('rojo')}}/>
    </div>
    <div id='abajo'>
        <div id='verde' className={(color==='verde') ? 'boton' : 'boton opacidad'} onClick={()=>{handleClick('verde')}}/>
        <div id='amarillo' className={(color==='amarillo') ? 'boton' : 'boton opacidad'} onClick={()=>{handleClick('amarillo')}}/>
    </div>
  </div>
  )
}

export default Seleccion