import React from 'react'
import Tablero from '../Tablero'
import './style.css'



const Sweet = () => {
  return (
    <div id='juego'>
        <div id='cabecera'>
            <div id='titulo'>
                Sweet Memories
            </div>
            <div id='score'>
                Puntuacion
            </div>
        </div>
        <div>
            <Tablero/>
        </div>
    </div>
  )
}

export default Sweet