import React, { Component } from "react";
import ListaDeNotas from "./components/ListaDeNotas";
import FormularioCadastro from "./components/FomularioCadastro";
import "./assets/App.css";
import "./assets/index.css"

class App extends Component {
  render() {
    return (
      <se className="conteudo">
        <FormularioCadastro />
        <ListaDeNotas />
      </se>
    );
  }
}

export default App;
