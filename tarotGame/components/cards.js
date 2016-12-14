import _ from 'lodash'


export default class Cards extends Component {

  constructor() {
    this.reset()
  } // why do we need this?

  shuffle() {
    this.deck = _.shuffle(this.deck)
}

  drawCard () {
    return this.setReversed(this.deck.pop())
}
  setReversed(card) {
    this.card.reversed =  (Math.random() > .5)  ? true : false
  }


  reset() {
    this.deck = deck.shuffle()
  }


  const deck = [
    { name: cups01,
      reversed: false,
      location: "",
    },
    { name: cups02,
      reversed: false,
      location: "",
    },
    { name: cups03,
      reversed: false,
      location: "",
    },
    { name: cups04,
      reversed: false,
      location: "",
    },
    { name: cups05,
      reversed: false,
      location: "",
    },
    { name: cups06,
      reversed: false,
      location: "",
    },
    { name: cups07,
      reversed: false,
      location: "",
    },
    { name: cups08,
      reversed: false,
      location: "",
    },
    { name: cups08,
      reversed: false,
      location: "",
    },
    { name: cups10,
      reversed: false,
      location: "",
    },
  ]

}
