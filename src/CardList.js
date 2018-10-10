import React, { Component } from 'react';

class CardList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cards: props.cards
    };
  }

  componentDidMount() {
    this.timeOut = setTimeout(() => {
      this.setState({ show: true });
    }, 300);
  }

  componentWillUnmount() {
    if (this.timeOut) {
      clearTimeout(this.timeOut);
    }
    this.setState({ show: false });
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

    const className = `card-list list-container ${this.state.show ? 'reveal' : ''}`;

    return (
      <nav className={className} ref="listContainer">
        <ul>
          { cards }
        </ul>
      </nav>
    );
  }
}

export default CardList;