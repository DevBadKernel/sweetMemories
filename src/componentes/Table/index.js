import React from 'react'
import './style.css'
import Cards from '../Cards'

const Table = ({seleccion1, seleccion2, cartas, posElim, jugada}) => {
    return (
        <div id='tablero'>
        <div id='cartas'>
            {cartas.map((carta, index) => {
            return <Cards carta={carta} pos={index} key={`${carta} - ${index}`} jugada={jugada} disabled={posElim.includes(index) ? true : false} selected={(index === seleccion1 || index === seleccion2) ? true : false} />
            })}
        </div>
        </div>
    )
}

export default Table