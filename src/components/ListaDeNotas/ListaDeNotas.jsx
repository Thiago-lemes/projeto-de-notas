import React, { Component } from "react";
import CardNota from "../CardNota";
import "./estilo.css"

class ListaDeNotas extends Component {
  render() {
      ///foi preciso criar um array para intregar como o Js, no vetor foi defenido o nome de cada categoria
    return <ul className="lista-notas">
        {this.props.notas.map((nota, index) =>{
        return(
            <li className="lista-notas_item" key={index}>
                <CardNota/>
            </li>
        ); 
    })}
    </ul>;
    
    ///no map foi necessario definir a função que vai retornar o que vai conter dentro de cada categoria 
  }
}

export default ListaDeNotas;
