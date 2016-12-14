import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import _ from 'lodash'
import Deck from '../src/deck'
//import Card from '../components/card'

const deck = ('Deck', Deck);
let currentDeck = deck

class App extends Component {

  constructor() {
    super()
    this.state = {card: null}
    //this.state = {deck.props}
  }

  updateCard(card) {
    this.setState(Object.assign(this.state, {card: card}))
  }

  render() {
    let pastButton = <button onClick={drawCard.bind(this)}>Past</button>
    let presentButton = <button onClick={drawCard.bind(this)}>Present</button>
    let futureButton = <button onClick={drawCard.bind(this)}>Future</button>
    let resetButton = <button onClick={reset}>Restart</button>

    function drawCard () {
     let card = _.shuffle(currentDeck).pop()
     if (Math.random() > .5) {card.reversed = true} else {card.reversed = false}
     this.updateCard(card)
     currentDeck = currentDeck.filter(function(el) {
      return el.name !== card.name})
     console.log(currentDeck)
    }


     function reset() {
       currentDeck = deck
     }


//  handleClick() {
//    display current card name ;
// }
//
   const cardImage = this.state.card ?
       <img src={this.state.card.image}  alt={this.state.card.name} />
       : null
    // const cardDescription = this.state.card ?
    //     {this.state.card.description}  alt={this.state.card.name}
    //     : null

      return (
      <div>
        {pastButton}
        {presentButton}
        {futureButton}
        {resetButton}
        {cardImage}

      </div>

// {cardDescription}
        //<img src="{this.state.card}"/>
    )
      //<Cards hand={this.method.bind(this)}/>
      // <div className="cardDescription">
      //   {this.props.description}
      // </div>

      //onClick => this.drawCard() className="past")}



  }
}
export default App;
