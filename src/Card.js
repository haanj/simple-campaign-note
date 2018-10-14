import React, { Component } from 'react'
import { CancelConfirmButton } from './CancelConfirmButton'

class Card extends Component {
  constructor(props) {
    super(props)
    this.state = {
      card: props.card
    }
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.card !== this.props.card) {
      this.setState({ card: nextProps.card })
    }
  }

  render() {
    const card = this.state.card
    if (!card) {
      return null
    }

    return (
      <article className="card-container">
        <header>
          <h1 className="card-name">{card.name}</h1>
          <CancelConfirmButton show={true} />
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