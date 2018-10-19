import React, { Component } from 'react'
import MicroEditor from './MicroEditor'

export default class CardEditor extends Component {
  constructor(props) {
    super(props)
    this.state = { card: props.card }
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
          <h1>
            <MicroEditor
              text={card.name}
              defaultText='Untitled'
              handleClickConfirm={name => this.props.handleUpdateCard(card.id, { name })}
            />
          </h1>
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