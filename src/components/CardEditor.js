import React, { Component } from 'react'
import { CancelConfirmButton } from './CancelConfirmButton'

export default class CardEditor extends Component {
  constructor(props) {
    super(props)
    this.state = {
      card: props.card,
      isNameFocused: false,
    }
    this.nameInput = React.createRef()
    this.handleChangeNameFocus = this._onChangeNameFocus.bind(this)
    this.handleClickCancel = this._onClickCancel.bind(this)
    this.handleClickConfirm = this._onClickConfirm.bind(this)
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.card !== this.props.card) {
      this.setState({ card: nextProps.card })
    }
  }

  _onChangeNameFocus(isNameFocused) {
    this.setState({ isNameFocused })

    if (isNameFocused) {
      // workaround to auto-focus to newly-contentEditable element
      setTimeout(() => {
        this.nameInput.current.focus()
      },0)
    }
  }

  _onClickCancel() {
    this.nameInput.current.innerText = this.state.card.name
    this.handleChangeNameFocus(false)
  }

  _onClickConfirm() {
    this.handleChangeNameFocus(false)
    const name = this.nameInput.current.innerText || 'Untitled'
    this.props.handleUpdateCard(this.state.card.id, { name })
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
            ref={this.nameInput}
            className={cardNameClass}
            onClick={() => this.handleChangeNameFocus(true)}
            contentEditable={this.state.isNameFocused}
          >
            {card.name}
          </h1>
          <CancelConfirmButton
            show={this.state.isNameFocused}
            handleClickCancel={() => this.handleClickCancel()}
            handleClickConfirm={() => this.handleClickConfirm()}
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