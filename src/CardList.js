import React, { Component } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

class CardList extends Component {
  constructor(props) {
    super(props)
    this.state = {
      cards: props.cards,
      activeCardId: props.activeCardId
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
      this.setStateDelayed({
        cards: nextProps.cards,
        show: true,
        activeCardId: nextProps.activeCardId
      })
    } else if (nextProps.activeCardId !== this.props.activeCardId) {
      this.setState({ activeCardId: nextProps.activeCardId })
    }
  }

  render() {
    const cards = this.state.cards.map(card => {
      const isActive = card.id === this.state.activeCardId
      return (
        <li
          class={isActive ? 'active' : ''}
          alt={isActive ? 'Active Card' : ''}
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
          <li key='addCard'>
            <FontAwesomeIcon icon={['far', 'plus-square']} />
          </li>
        </ul>
      </nav>
    )
  }
}

export default CardList