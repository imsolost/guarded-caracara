import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import _ from 'lodash'
import Deck from '../src/deck'
//import Card from '../components/card'

const deck = ('Deck', Deck);

class App extends Component {

  constructor() {
    super()
    this.state = {card: null}
  }

  updateCard(card) {
    this.setState(Object.assign(this.state, {card: card}))
  }
  render() {
    let pastButton = <button onClick={drawCard.bind(this)}>Past</button>
    let presentButton = <button onClick={drawCard.bind(this)}>Present</button>
    let futureButton = <button onClick={drawCard.bind(this)}>Future</button>

    function drawCard () {
     let card = _.shuffle(deck).pop()
     if (Math.random() > .5) {card.reversed = true} else {card.reversed = false}
     this.updateCard(card.name)
    }


    // function reset() {
    //   this.Deck = _.shuffle(Deck)
    // }


//  handleClick() {
//    display current card name ;
// }
//
      return (
      <div>
        {pastButton}
        {presentButton}
        {futureButton}
        {this.state.card}
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
