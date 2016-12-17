import React, { Component } from 'react'
import './App.css';
import _ from 'lodash'
import Deck from '../src/deck'

const deck = ("Deck", Deck)
let currentDeck = deck;
let dealtCards = ["", "", ""];
let cardBack = <img src={process.env.PUBLIC_URL + "/images/cardBack.jpg"} style={{width: 200, height: 300}}/>
let cardDescription = null

class App extends Component {
  constructor() {
    super()
    this.state = { cards: [] }
  }

  updateCard(card) {
    const cards = this.state.cards
    cards.push(card)
    this.setState(Object.assign(this.state, {cards: cards}))
  }

  reset() {
    currentDeck = deck
    dealtCards = ["", "", ""]
    cardDescription = null
    this.setState(Object.assign(this.state, {}))
  }

  render() {
    let resetButton = <button onClick={() => this.reset()}>New Reading</button>


    function drawCard0 () {
      if(dealtCards[0] != "") {
        cardDescription = dealtCards[0].description
        this.setState(Object.assign(this.state))
        return undefined
      }
     let card = _.shuffle(currentDeck).pop()
     if (Math.random() > .5) {card.reversed = true} else {card.reversed = false}
     this.updateCard(card)
     currentDeck = currentDeck.filter(function(el) {
      return el.name !== card.name})
     dealtCards[0] = card
     cardDescription = dealtCards[0].description
    }

    function drawCard1 () {
      if(dealtCards[1] != "") {
        cardDescription = dealtCards[1].description
        this.setState(Object.assign(this.state))
        return undefined
      }
     let card = _.shuffle(currentDeck).pop()
     if (Math.random() > .5) {card.reversed = true} else {card.reversed = false}
     this.updateCard(card)
     currentDeck = currentDeck.filter(function(el) {
      return el.name !== card.name})
     dealtCards[1] = card
     cardDescription = dealtCards[1].description
    }

    function drawCard2 () {
      if(dealtCards[2] != "") {
        cardDescription = dealtCards[2].description
          this.setState(Object.assign(this.state))
          return undefined
      }
     let card = _.shuffle(currentDeck).pop()
     if (Math.random() > .5) {card.reversed = true} else {card.reversed = false}
     this.updateCard(card)
     currentDeck = currentDeck.filter(function(el) {
      return el.name !== card.name})
     dealtCards[2] = card
     cardDescription = dealtCards[2].description
    }
//let upsideDown = dealtCards[0].style={{width: 200, height: 300}}



// if dealtCards[0].reversed === true {
//   let image0 = dealtCards[0] ? <img src={process.env.PUBLIC_URL + dealtCards[0].image} style={{transform: rotate(180deg) width: 200, height: 300}}/> : cardBack
// } else
  let image0 = dealtCards[0] ? <img src={process.env.PUBLIC_URL + dealtCards[0].image} style={{width: 200, height: 300}}/> : cardBack

let image1 = dealtCards[1] ? <img src={process.env.PUBLIC_URL + dealtCards[1].image} style={{width: 200, height: 300}}/> : cardBack

let image2 = dealtCards[2] ? <img src={process.env.PUBLIC_URL + dealtCards[2].image} style={{width: 200, height: 300}}/> : cardBack

let flipCard1 = <div className="tarotCard1" onClick={drawCard0.bind(this)} >
                    <div className="front">{dealtCards[0]  ? image0  : cardBack} </div>
                    <div className="Past"> Past </div>
              </div>

let flipCard2 = <div className="tarotCard2" onClick={drawCard1.bind(this)} >
                          <div className="front">{dealtCards[1]  ? image1  : cardBack} </div>
                  </div>

let flipCard3 = <div className="tarotCard3" onClick={drawCard2.bind(this)} >
                      <div className="front">{dealtCards[2] ? image2  : cardBack} </div>
                  </div>

let past = <div className='newLevel'><div className="Past"> Past </div>

   <div className="Present"> Present </div>

 <div className="Future"> Future </div>
</div>
let fortune = <div className="Fortune">{cardDescription}</div>

return (
      <div className="board">
        {past}
        {resetButton}
        {flipCard1}
        {flipCard2}
        {flipCard3}
        {fortune}
      </div>


    )
  }
}
export default App;
