import React, { Component } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import CardListItem from './CardListItem'

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

    if (JSON.stringify(nextProps.cards) !== JSON.stringify(this.props.cards)) {
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

  // TODO: refactor some of this into functional components
  render() {
    const cards = this.state.cards.map(card => {
      return (
        <li
          key={card.id}
        >
          <CardListItem
            isActive={card.id === this.state.activeCardId}
            handleChangeCard={this.props.handleChangeCard}
            card={card}
          />
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
            onClick={() => this.props.handleAddCard(this.state.activeCategoryId)}
          >
            <FontAwesomeIcon icon={['far', 'plus-square']} />
          </li>
        </ul>
      </nav>
    )
  }
}

export default CardList