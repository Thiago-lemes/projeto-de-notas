import React, { Component } from "react";
import ListaDeNotas from "./components/ListaDeNotas";
import FormularioCadastro from "./components/FomularioCadastro";


class App extends Component {
  render() {
    return (
      <main>
        <FormularioCadastro />
        <ListaDeNotas />
      </main>
    );
  }
}

export default App;
