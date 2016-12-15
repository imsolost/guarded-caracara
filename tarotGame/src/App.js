import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import _ from 'lodash'
import Deck from '../src/deck'
//import Card from '../components/card'
//import FlipCard from '../node_modules/react-native-flip-card/index'

const deck = ('Deck', Deck);
let currentDeck = deck
let cardBack = <img src={process.env.PUBLIC_URL + "/images/cardBack.jpg"} style={{width: 200, height: 300}}/>

class App extends Component {

  constructor() {
    super()
    this.state = {card: null}
  }

  updateCard(card) {
    this.setState(Object.assign(this.state, {card: card}))
  }


  render() {
    let pastButton = <button onClick={drawCard.bind(this)}>{cardBack}</button>
    let presentButton = <button onClick={drawCard.bind(this)}>{cardBack}</button>
    let futureButton = <button onClick={drawCard.bind(this)}>{cardBack}</button>
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
       <img src={this.state.card.image} style={{width: 200, height: 300}}/>
       : null

     //const cardBack = <img src=process.env.PUBLIC_URL + "/images/cardBack.jpg" />

    const cardDescription = this.state.card ?
        this.state.card.description
        : null

      return (
      <div>
        {pastButton}
        {presentButton}
        {futureButton}
        {resetButton}
        {cardImage}
        {cardDescription}
      </div>


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
