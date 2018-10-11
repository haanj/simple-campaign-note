import React, { Component } from 'react'

class CardList extends Component {
  constructor(props) {
    super(props)
    this.state = {
      cards: props.cards
    }
  }

  componentDidMount() {
    this.setStateDelayed({ show: true })
  }

  componentWillUnmount() {
    this.clearTimeout()
  }

  clearTimeout() {
    if (this.timeOut) {
      clearTimeout(this.timeOut)
    }
  }

  setStateDelayed(newState, delay = 300) {
    this.timeOut = setTimeout(() => {
      this.setState(newState)
    }, delay)
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.cards !== this.props.cards) {
      this.clearTimeout()
      this.setState({ show: false })
      this.setStateDelayed({ cards: nextProps.cards, show: true})
    }
  }

  render() {
    const cards = this.state.cards.map(card => {
      return (
        <li
          key={card.id}
          onClick={() => this.props.changeCard(card.id)}
        >
          {card.name}
        </li>
      )
    })

    let className = `card-list list-container`
    if (this.state.show) className += ` show`

    return (
      <nav className={className}>
        <ul>
          { cards }
        </ul>
      </nav>
    )
  }
}

export default CardList