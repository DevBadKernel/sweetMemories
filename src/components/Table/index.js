import React from 'react'
import './style.css'
import Cards from '../Cards'

var cartas = ["carta1", "carta2", "carta3", "carta4", "carta5", "carta6", "carta7", "carta8", "carta9", "carta1", "carta2", "carta3", "carta4", "carta5", "carta6", "carta7", "carta8", "carta9"];

const Table = () => {
  return (
    <div id='tablero'>
      <div id='cartas'>
        {cartas.map(carta => {
          return <Cards carta={carta}/>
        })}
      </div>
    </div>
  )
}

export default Table