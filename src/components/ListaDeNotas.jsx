import React, { Component } from "react";
import CardNota from "./CardNota/CardNotas";

class ListaDeNotas extends Component {
  render() {
      ///foi preciso criar um array para intregar como o Js, no vetor foi defenido o nome de cada categoria
    return <ul>
        {Array.of("Trabalho", "Trampo", "Estudos").map((categoria, index) =>{
        return(
            <li key={index}>
                <div>{categoria}</div>
                <CardNota/>
            </li>
        ); 
    })}
    </ul>;
    
    ///no map foi necessario definir a função que vai retornar o que vai conter dentro de cada categoria 
  }
}

export default ListaDeNotas;
