import React, {Component} from 'react'

export default class Card extends Component {
  render() {
    const {name, reversed, location} = this.props

    return(
      <div className="card">
        {name}
      </div>
    )
  }
}
