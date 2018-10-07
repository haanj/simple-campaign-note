import React, { Component } from 'react';

class CardList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cards: props.cards
    };
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.cards !== this.props.cards) {
      this.setState({ cards: nextProps.cards });
    }
  }

  render() {
    const cards = this.state.cards.map(card => {
      return (
        <li
          key={card.id}
          onClick={() => this.props.changeCard(card.id)}
        >
          {card.name}
        </li>
      )
    });

    return (
      <nav class="card-list list-container">
        <ul>
          { cards }
        </ul>
      </nav>
    );
  }
}

export default CardList;