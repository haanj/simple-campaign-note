import React, { Component } from 'react';
import './App.css';
import { cards } from './cardSeeds';
import CategoryList from './CategoryList';
import CardList from './CardList';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      categories: cards,
      activeCategory: cards[0]
    };
    this._handleChangeCategory = this._onChangeCategory.bind(this);
    this.poop = true;
  }

  _onChangeCategory(id) {
    const activeCategory = this.state.categories.find(category => {
      return category.id === id;
    });

    this.setState({ activeCategory });
  }

  render() {
    return (
      <div className="App">
        <CategoryList
          categories={this.state.categories}
          changeCategory={this._handleChangeCategory}
        />
        <CardList cards={this.state.activeCategory.cards} />
      </div>
    );
  }
}

export default App;
