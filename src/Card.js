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
      <section className="card-container">
        <h1 className="card-name">{card.name}</h1>

        <label for="card-description">Summary</label>
        <div className="card-description">{card.description}</div>

        <label for="card-text">Notes</label>
        <div className="card-text">{card.text}</div>
      </section>
    );
  }
}

export default Card;