import React, { Component } from "react";
import CardNota from "./CardNotas";

class ListaDeNotas extends Component {
  render() {
      ///foi preciso criar um array para intregar como o Js, no vetor foi defenido o nome de cada categoria
    return <ul>
        {Array.of("Trabalho", "Trampo", "Estudos").map((categoria) =>{
        return(
            <li>
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
