import React, { Component } from 'react'
import './style.css'
import Titulo from '../Titulo'
import Juego from '../Juego'

var colores = ['azul', 'rojo', 'amarillo', 'verde']
function crearSecuencia () {
  var secuencia = []
  while(secuencia.length  <50){
    var aleatorio = Math.floor(Math.random()*colores.length);
    secuencia.push(colores[aleatorio])
  }
  return secuencia
}
export default class Simon extends Component {
  constructor(props) {
      super(props)
      this.state = {
        secuencia:crearSecuencia(),
        secuenciaJugador: [],
        color:'',
      }
  }

  mostrarSecuencia = () => {
    setTimeout(() => {
      if(this.state.secuencia.length < this.state.secuenciaJugador.length +1){
        this.state.secuencia.map(color => {
          this.setState({color:color})
        })
      }
    }, 1000)
    console.log(`mostrando secuencia`)
  }

    
  render() {
    return (
      <div id='pantalla'>
        <Titulo/>
        <Juego secuencia={this.state.secuencia} color={this.state.color}/>
      </div>
    )
  }
}