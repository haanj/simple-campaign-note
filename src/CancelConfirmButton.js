import React, { Component } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export class CancelConfirmButton extends Component {
  constructor(props) {
    super(props)
    this.state = {
      show: props.show || false,
    }
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.show !== this.props.show) {
      this.setState({ show: nextProps.show })
    }
  }

  render() {
    let className = 'cancel-confirm'
    if (this.state.show) className += ' show'

    return (
      <span className={className}>
        <span
          className='cancel-button'
          onClick={() => this.props.clickCancel()}
        >
          <FontAwesomeIcon icon={['far', 'times-circle']} />
        </span>

        <span
          className='confirm-button'
          onClick={() => this.props.clickConfirm()}
        >
          <FontAwesomeIcon icon={['far', 'check-circle']} />
        </span>
      </span>
    )
  }
}