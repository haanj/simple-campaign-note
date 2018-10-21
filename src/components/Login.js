import React, { Component } from 'react'

export default class Login extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <>
      <h1 onClick={this.props.handleClickLogin}>Login</h1>
      <div>Test test test</div>
      </>
    )
  }
}