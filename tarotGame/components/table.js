// import React, {Component} from 'react'
// import Deck from '../src/deck'
//
// class Table extends Component {
//   render() {
//     const pastButton = <button onClick={drawCard}>Past</button>
//     const presentButton = <button onClick={drawCard}>Present</button>
//     const futureButton = <button onClick={drawCard}>Future</button>
//
//     constructor() {
//       this.reset()
//     } // why do we need this?
//
//     shuffle() {
//       this.deck = _.shuffle(this.deck)
//     }
//
//     drawCard () {
//       return this.setReversed(this.deck.pop())
//       console.log(this)
//     }
//     setReversed(card) {
//       this.card.reversed =  (Math.random() > .5)  ? true : false
//     }
//
//
//     reset() {
//       this.deck = deck.shuffle()
//     }
//
//     return (
//       <div>
//         {pastButton}
//         {presentButton}
//         {futureButton}
//       </div>
//       //<Cards hand={this.method.bind(this)}/>
//       <div className="cardDescription">
//         {this.props.description}
//       </div>
//
//
//     )
//   }
// }
