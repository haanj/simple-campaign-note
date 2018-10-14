import React, { Component } from 'react'
import { CancelConfirmButton } from './CancelConfirmButton'

class Card extends Component {
  constructor(props) {
    super(props)
    this.state = {
      card: props.card,
      isNameFocused: false
    }
    this.handleChangeNameFocus = this._onChangeNameFocus.bind(this)
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.card !== this.props.card) {
      this.setState({ card: nextProps.card })
    }
  }

  _onChangeNameFocus(isNameFocused) {
    this.setState({ isNameFocused })
  }
  

  render() {
    const card = this.state.card
    if (!card) {
      return null
    }

    let cardNameClass = 'card-name'
    if (this.state.isNameFocused) cardNameClass += ' focus'

    return (
      <article className="card-container">
        <header>
          <h1
            className={cardNameClass}
            onClick={() => this.handleChangeNameFocus(true)}
          >
            {card.name}
          </h1>
          <CancelConfirmButton
            show={this.state.isNameFocused}
            clickCancel={() => this.handleChangeNameFocus(false)}
          />
        </header>

        <section>
          <label htmlFor="card-description">Summary</label>
          <div className="card-description">{card.description}</div>
        </section>

        <main>
          <label htmlFor="card-text">Notes</label>
          <div className="card-text">{card.text}</div>
        </main>
      </article>
    )
  }
}

export default Card