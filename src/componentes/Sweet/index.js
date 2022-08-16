import React, {Component} from 'react'
import Table from '../Table'
import './style.css'

function repartir(){
    var cartas = ["carta1", "carta2", "carta3", "carta4", "carta5", "carta6", "carta7", "carta8", "carta9", "carta1", "carta2", "carta3", "carta4", "carta5", "carta6", "carta7", "carta8", "carta9"];
    cartas.sort(function() {return Math.random() -0.5})
    return cartas
}

export default class Sweet extends Component {
    constructor(props){
        super(props)
        this.state = {
            cartas:repartir(),
            seleccion1:null,
            seleccion2:null,
            posElim:[],
            score:0,
        }
    }

    jugada = (pos) => {
        var {seleccion1, cartas, score, posElim} = this.state
        if(!posElim.includes(pos)){
            if (seleccion1 === null){
                this.setState({seleccion1:pos})
            }else {
                this.setState({seleccion2:pos})
                setTimeout(() => {
                    if (cartas[pos] === cartas[seleccion1] && pos !== seleccion1){
                        this.setState({posElim: [...posElim, seleccion1, pos]/* es hacer un push en posElim */, score: score + 100, seleccion1:null, seleccion2:null })
                    }else {
                        this.setState({seleccion1:null, seleccion2:null, score: score-20})
                    }
                },1000)
            }
        }
    }
    

    render() {
        var {seleccion1, seleccion2, cartas, score, posElim} = this.state
        return (
                <div id='juego'>
                    <div id='cabecera'>
                        <div id='titulo'>
                            Sweet Memories
                        </div>
                        <div id='score'>
                            {score}
                        </div>
                    </div>
                    <div>
                        <Table cartas={cartas} jugada={this.jugada} seleccion1={seleccion1} seleccion2={seleccion2} posElim={posElim}/>
                    </div>
                </div>
            )
        }
}