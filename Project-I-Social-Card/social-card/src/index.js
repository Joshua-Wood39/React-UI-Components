import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import CardBanner from './components/CardComponents/CardBanner';

ReactDOM.render(<App />, document.getElementById('root'));

class Card {
    constructor(card) {
        this.card = card;

        this.card.addEventListener('mouseover', () => this.cursorChange());
        this.card.addEventListener('click', () => this.goReact());
    }

    cursorChange() {
        this.card.style.cursor= "pointer";
    }

    goReact() {
        window.open("https://www.reactjs.org");
    }
}




let card = document.querySelector('.cardContain');
new Card(card);