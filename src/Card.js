import React, { Component } from 'react';

class Card extends Component {
  constructor(props) {
    super(props);
    this.state = {
      card: props.card
    };
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.card !== this.props.card) {
      this.setState({ card: nextProps.card });
    }
  }

  render() {
    const card = this.state.card;

    return (
      <div>
        <h1>{card.name}</h1>
        <div>{card.description}</div>
        <div>{card.text}</div>
      </div>
    );
  }
}

export default Card;