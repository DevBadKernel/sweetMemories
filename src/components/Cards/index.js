import React from 'react'
import './style.css'
import Back from '../../images/candyBack.png'
import Carta1 from '../../images/1.png'
import Carta2 from '../../images/2.png'
import Carta3 from '../../images/3.png'
import Carta4 from '../../images/4.png'
import Carta5 from '../../images/5.png'
import Carta6 from '../../images/6.png'
import Carta7 from '../../images/7.png'
import Carta8 from '../../images/8.png'
import Carta9 from '../../images/9.png'

const Cards = ({carta}) => {
  return (
    <div id='carta'>
        {carta === "carta1" && <img src={Carta1}/>}
        {carta === "carta2" && <img src={Carta2}/>}
        {carta === "carta3" && <img src={Carta3}/>}
        {carta === "carta4" && <img src={Carta4}/>}
        {carta === "carta5" && <img src={Carta5}/>}
        {carta === "carta6" && <img src={Carta6}/>}
        {carta === "carta7" && <img src={Carta7}/>}
        {carta === "carta8" && <img src={Carta8}/>}
        {carta === "carta9" && <img src={Carta9}/>}
    </div>
  )
}

export default Cards