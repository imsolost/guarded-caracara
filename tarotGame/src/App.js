import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import _ from 'lodash'
import Deck from '../src/deck'

console.log('Deck', Deck);


class App extends Component {
  render() {
    const pastButton = <button onClick={drawCard}>Past</button>
    const presentButton = <button onClick={drawCard}>Present</button>
    const futureButton = <button onClick={drawCard}>Future</button>

    // constructor() {
    //   this.reset()
    // } // why do we need this?

    function shuffle() {
      this.deck = _.shuffle(this.deck);
    }

    function drawCard () {
      return this.setReversed(this.deck.pop())
      console.log(this)
    }
    function setReversed(card) {
      this.card.reversed =  (Math.random() > .5)  ? true : false
    }


    function reset() {
      this.deck = _.shuffle(Deck)
    }

    return (
      <div>
        {pastButton}
        {presentButton}
        {futureButton}
      </div>
      //<Cards hand={this.method.bind(this)}/>
      // <div className="cardDescription">
      //   {this.props.description}
      // </div>


    )
  }
}
export default App;
