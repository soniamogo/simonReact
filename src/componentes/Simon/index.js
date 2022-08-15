import React, { Component } from 'react'
import './style.css'
import Titulo from '../Titulo'
import Juego from '../Juego'

export default class Simon extends Component {
  constructor(props) {
      super(props)
      this.state = {
      }
  }

    
  render() {
    
    return (
      <div id='pantalla'>
        <Titulo/>
        <Juego/>
      </div>
    )
  }
}