import React, { Component } from 'react'

export default class Login extends Component {
  constructor(props) {
    super(props)
    this.state = {
      email: '',
      password: ''
    }

    this.handleChange = this._onChange.bind(this)
    this.handleSubmit = this._onSubmit.bind(this)
  }

  _onChange(event) {
    const target = event.target
    const key = target.getAttribute('data-state-field')
    const value = target.value

    this.setState({
      [key]: value
    })
  }

  _onSubmit(event) {
    event.preventDefault()
    alert('Log in for: ' + JSON.stringify(this.state))
  }
  

  render() {
    return (
      <div className = 'login-container'>
        <h1>Login</h1>
        <form onSubmit={this.handleSubmit}>
          <div>
            <label>email</label>
            <input 
              type="email" 
              value={this.state.email} 
              data-state-field="email" 
              onChange={this.handleChange}
            />
          </div>
          <div>
            <label>password</label>
            <input 
              type="text" 
              value={this.state.password} 
              data-state-field="password" 
              onChange={this.handleChange}
            />
          </div>
          <input type="submit" value="Submit" />
        </form>
      </div>
    )
  }
}