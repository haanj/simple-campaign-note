import React, { Component } from 'react'
import './App.scss'

import { cards } from './cardSeeds'

import CategoryList from './CategoryList'
import CardList from './CardList'
import Card from './Card'


class App extends Component {
  constructor(props) {
    super(props)
    this.state = { 
      categories: cards,
      activeCategory: cards[0],
      activeCard: cards[0].cards[0]
    }
    this._handleChangeCategory = this._onChangeCategory.bind(this)
    this._handleChangeCard = this._onChangeCard.bind(this)
  }

  _onChangeCategory(id) {
    const activeCategory = this.state.categories.find(category => {
      return category.id === id
    })

    this.setState({
      activeCategory,
      activeCard: activeCategory.cards[0]
    })
  }

  _onChangeCard(id) {
    const activeCard = this.state.activeCategory.cards.find(card => {
      return card.id === id
    })

    this.setState({ activeCard })
  }

  render() {
    return (
      <div className="App">
        <CategoryList
          categories={this.state.categories}
          changeCategory={this._handleChangeCategory}
        />
        <CardList
          cards={this.state.activeCategory.cards}
          changeCard={this._handleChangeCard}
        />
        <Card card={this.state.activeCard} />
      </div>
    )
  }
}

export default App
