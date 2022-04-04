import React, { Component } from "react";
import ListaDeNotas from "./components/ListaDeNotas";
import FormularioCadastro from "./components/FomularioCadastro";
import "./assets/App.css";
import "./assets/index.css"

class App extends Component {
  criarNota(titulo, texto){
    console.log('uma nova nota foi criada ' )
  }
  render() {
    return (
      <se className="conteudo">
        <FormularioCadastro  criarNota={this.criarNota}/>
        <ListaDeNotas />
      </se>
    );
  }
}

export default App;
