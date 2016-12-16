import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import _ from 'lodash'
import Deck from '../src/deck'
//import Card from '../components/card'
//import FlipCard from 'react-native-flip-card'

const deck = ("Deck", Deck)
let currentDeck = deck;
let dealtCards = ["", "", ""];
let cardBack = <img src={process.env.PUBLIC_URL + "/images/cardBack.jpg"} style={{width: 200, height: 300}}/>
const initialState = {};

class App extends Component {

  constructor() {
    super()
    this.state = initialState;
  }

  updateCard(card) {
    this.setState(Object.assign(this.state, {card: card}))
  }

  render() {
    const {gameState} = this.state;
    // let pastButton = <button onClick={drawCard.bind(this)}>{cardBack}</button>
    // let presentButton = <button onClick={drawCard.bind(this)}>{cardBack}</button>
    // let futureButton = <button onClick={drawCard.bind(this)}>{cardBack}</button>
    let resetButton = <button onClick={reset}>Restart</button>


    function drawCard0 () {
     let card = _.shuffle(currentDeck).pop()
     if (Math.random() > .5) {card.reversed = true} else {card.reversed = false}
     this.updateCard(card)
     currentDeck = currentDeck.filter(function(el) {
      return el.name !== card.name})
     dealtCards[0] = card
     console.log(dealtCards)
    }

    function drawCard1 () {
     let card = _.shuffle(currentDeck).pop()
     if (Math.random() > .5) {card.reversed = true} else {card.reversed = false}
     this.updateCard(card)
     currentDeck = currentDeck.filter(function(el) {
      return el.name !== card.name})
     dealtCards[1] = card
     console.log(dealtCards)
    }

    function drawCard2 () {
     let card = _.shuffle(currentDeck).pop()
     if (Math.random() > .5) {card.reversed = true} else {card.reversed = false}
     this.updateCard(card)
     currentDeck = currentDeck.filter(function(el) {
      return el.name !== card.name})
     dealtCards[2] = card
     console.log(dealtCards)
    }


     function reset() {
       currentDeck = deck
       dealtCards = ["", "", ""];
       console.log(initialState)
       //this.setState(initialState);
     }


const cardImage = this.state.card ?

  <img src={this.state.card.image} style={{width: 200, height: 300}}/>
   : null

const cardDescription = this.state.card ?
        this.state.card.description
        : null

  // let flipper = (function() {
  //         var cards = document.querySelectorAll(".card.effect__click");
  //         for ( var i  = 0, len = cards.length; i < len; i++ ) {
  //           var card = cards[i];
  //           clickListener( card );
  //         }
  //
  //         function clickListener(card) {
  //           card.addEventListener( "click", function() {
  //             var c = this.classList;
  //             c.contains("flipped") === true ? c.remove("flipped") : c.add("flipped");
  //           });
  //         }
  let image0 = dealtCards[0] ? <img src={process.env.PUBLIC_URL + dealtCards[0].image} style={{width: 200, height: 300}}/> : cardBack
  let image1 = dealtCards[1] ? <img src={process.env.PUBLIC_URL + dealtCards[1].image} style={{width: 200, height: 300}}/> : cardBack
  let image2 = dealtCards[2] ? <img src={process.env.PUBLIC_URL + dealtCards[2].image} style={{width: 200, height: 300}}/> : cardBack

  let flipCard1 = <div className="tarotCard1" onClick={drawCard0.bind(this)} >
                      <div className="front">{dealtCards[0]  ? image0  : cardBack} </div>
                </div>

  let flipCard2 = <div className="tarotCard2" onClick={drawCard1.bind(this)} >
                      <div className="front">{dealtCards[1]  ? image1  : cardBack} </div>
                  </div>

  let flipCard3 = <div className="tarotCard3" onClick={drawCard2.bind(this)} >
                      <div className="front">{dealtCards[2] ? image2  : cardBack} </div>
                  </div>
// let flipCard = <div className="tarotCard" onClick={drawCard.bind(this)} >
//                     <div className="front">{cardImage} </div>
//                     <div className="back">{cardBack} </div>
//
//               </div>
  return (
      <div className="board">
        {resetButton}
        {cardDescription}
        {flipCard1}
        {flipCard2}
        {flipCard3}
      </div>
// HTML
//     <div class="card-container">
//         <div class ="flipcard "></div>
//     </div>

//  <div className="cardPosition"> {position}</div>

//
// CSS



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
