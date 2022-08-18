import React from 'react'
import './style.css'

const Titulo = ({nivel, movesJugador}) => {
  return (
    <div id="titulo">
        <div id='nombre'>
            SIMON
        </div>
        <div id='derecha'>
            <div>Secuencia memorizada</div>
            <div id='contador'>{`${movesJugador} / ${nivel+1}`}</div>
        </div>
    </div>
  )
}

export default Titulo