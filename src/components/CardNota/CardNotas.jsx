import React, { Component } from 'react';
import "./style.css"


class CardNota extends Component { 
    render() { 
        return (
            <section className='card-nota'>
                <header className='crad__cabecalho'>
                <h3 className='card__titulo'>Titulo</h3>
                </header>
                <p className='card__text'>Escreva sua nota</p>
            </section>
        );
    }
}
export default CardNota;
 
