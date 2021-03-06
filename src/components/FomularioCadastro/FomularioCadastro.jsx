import React, { Component } from "react";
import "./estilo.css";

class FormularioCadastro extends Component {
  constructor(props){
    super(props);
    this.titulo ="";
    this.texto = "";
  }

  handleMudancaTitulo(evento) {
    this.titulo= evento.target.valeu;
    evento.stopPropagation();
   
  }

  handleMudancaTexto(evento){
    this.texto= evento.target.valeu;
    evento.stopPropagation();

  }

  criarNota(evento){
    evento.preventDefault();
    evento.stopPropagation();
    this.props.criarNota(this.titulo, this.texto)
  }

  render() {
    return (
      <form className="form-cadastro"
      onSubmit={this.criarNota.bind(this)}>
        <input
          type="text"
          placeholder="Titulo"
          className="form-cadastro_input"
          onChange={this.handleMudancaTitulo.bind(this)}
        />
        <textarea
          rows={15}
          placeholder="Escreva sua nota..."
          className="form-cadastro_input"
          onChange={this.handleMudancaTexto.bind(this)}
        />
        <button className="form-cadastro_input form-cadastro_submit">
          Criar nota{" "}
        </button>
      </form>
    );
  }
}
export default FormularioCadastro;
