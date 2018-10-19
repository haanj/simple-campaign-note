import React, { Component } from 'react'
import { CancelConfirmButton } from './CancelConfirmButton'

export default class MicroEditor extends Component {
  constructor(props) {
    super(props)
    this.state = {
      text: props.text,
      isActive: false,
    }
    this.input = React.createRef()

    this.handleChangeActive = this._onChangeActive.bind(this)
    this.handleClickCancel = this._onClickCancel.bind(this)
    this.handleClickConfirm = this._onClickConfirm.bind(this)
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.text !== this.props.text) {
      this.setState({ text: nextProps.text })
    }
  }

  _onChangeActive(isActive) {
    this.setState({ isActive })

    if (isActive) {
      // workaround to auto-focus to newly-contentEditable element
      setTimeout(() => {
        this.input.current.focus()
      },0)
    }
  }

  _onClickCancel() {
    this.input.current.innerText = this.state.text
    this.handleChangeActive(false)
  }

  _onClickConfirm() {
    this.handleChangeActive(false)
    const newText = this.input.current.innerText || this.props.defaultText
    this.props.handleClickConfirm(newText)
  }

  render() {
    const text = this.state.text || this.props.defaultText
    let inputClass = 'editor'
    if (this.state.isActive) inputClass += ' focus'

    return (
      <span className='editor-container'>
        <span
          ref={this.input}
          className={inputClass}
          onClick={() => this.handleChangeActive(true)}
          contentEditable={this.state.isActive}
        >
          {text}
        </span>
        <CancelConfirmButton
          show={this.state.isActive}
          handleClickCancel={() => this.handleClickCancel()}
          handleClickConfirm={() => this.handleClickConfirm()}
        />
      </span>
    )
  }
}