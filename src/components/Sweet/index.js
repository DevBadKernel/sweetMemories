import React from 'react'
import Table from '../Table'
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
            <Table/>
        </div>
    </div>
  )
}

export default Sweet