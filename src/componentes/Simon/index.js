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
        showing: false,
        nivel:0,
        color:'',
      }
  }

  mostrarSecuencia = (index) =>{
    this.mostrarJugada(index)
    if(index<this.state.nivel){
        setTimeout(()=>{
            this.mostrarSecuencia(index+1)
        }, 1000)
    }
  }

  mostrarJugada = (index) => {
    const color = this.state.secuencia[index]
    setTimeout(() => {
        let newShowing = index===this.state.nivel ? false : true;
        this.setState({color:'', showing:newShowing})
    }, 900)
    this.setState({color:color, showing:true, secuenciaJugador:[]})
  }

  hacerMovimiento = (colorMove) =>{
    let {secuenciaJugador, secuencia, nivel, color} = this.state;
    if(!this.state.showing){
        const newSecuenciaJugador = [...secuenciaJugador, colorMove];
        setTimeout(()=>{
            this.setState({color:''})
        }, 300);
        if(secuencia.slice(0,newSecuenciaJugador.length).every((elem,index)=> elem===newSecuenciaJugador[index])){
            if(newSecuenciaJugador.length === nivel+1){
                setTimeout(()=>{
                    this.mostrarSecuencia(0)
                }, 1000)
                this.setState({nivel:nivel+1, secuenciaJugador:[], color:colorMove})
            }else{
                this.setState({secuenciaJugador:newSecuenciaJugador, color:colorMove})
            }
        }else{
            setTimeout(()=>{
                this.mostrarSecuencia(0)
            }, 1000)
            this.setState({secuenciaJugador:[], color:colorMove})
        }
    }
  }

    
  render() {
    const {secuenciaJugador, showing, nivel, color} = this.state;
    return (
      <div id='pantalla'>
        <Titulo nivel={nivel} movesJugador={secuenciaJugador.length}/>
        <Juego color={color} handleClick={this.hacerMovimiento}/>
        {!showing && <button style={{marginTop:'20px', fontSize:'18px'}} onClick={()=>{this.mostrarSecuencia(0)}}>Mostrar secuencia</button>}
      </div>
    )
  }
}