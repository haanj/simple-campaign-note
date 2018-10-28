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
          <h1 className='card-name'>
            <MicroEditor
              text={card.name}
              defaultText='Untitled'
              handleClickConfirm={name => {
                this.props.handleUpdateCard(card.id, { name })
              }}
            />
          </h1>
        </header>

        <section>
          <header class='card-section-header'>
            Summary
          </header>
          <div className="card-description">
            <MicroEditor
              text={card.description}
              defaultText='Insert a summary'
              handleClickConfirm={description => {
                this.props.handleUpdateCard(card.id, { description })
              }}
            />
          </div>
        </section>

        <main>
          <header class='card-section-header'>
            Notes
          </header>
          <div className="card-text">
            <MicroEditor
              text={card.content}
              defaultText='Insert notes here'
              handleClickConfirm={text => {
                this.props.handleUpdateCard(card.id, { text })
              }}
            />
          </div>
        </main>
      </article>
    )
  }
}