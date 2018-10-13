import React, { Component } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

class CardList extends Component {
  constructor(props) {
    super(props)
    this.state = {
      cards: props.cards,
      activeCardId: props.activeCardId,
      activeCategoryId: props.activeCategoryId
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
    if (nextProps.activeCategoryId !== this.props.activeCategoryId) {
      this.setState({ activeCategoryId: nextProps.activeCategoryId})
    }

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

      const editIcon = (
        <span className='edit-button'>
          <FontAwesomeIcon icon={['far', 'edit']} />
        </span>
      )

      let className = 'name'
      if (isActive) className += ' active'

      const cardName = (
        <span
          className={className}
          alt={isActive ? 'Active Card' : ''}
          onClick={() => this.props.changeCard(card.id)}
        >
          {card.name}
        </span>
      )

      return (
        <li
          key={card.id}
        >
          {cardName}
          {editIcon}
        </li>
      )
    })

    let className = `card-list list-container`
    if (this.state.show) className += ` show`

    return (
      <nav className={className}>
        <ul>
          { cards }
          <li 
            className='add-button'
            key='addCard'
            onClick={() => this.props.addCard(this.state.activeCategoryId)}
          >
            <FontAwesomeIcon icon={['far', 'plus-square']} />
          </li>
        </ul>
      </nav>
    )
  }
}

export default CardList