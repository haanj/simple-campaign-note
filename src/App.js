import React, { Component } from 'react'
import './App.scss'

import { cards } from './cardSeeds'

import CategoryList from './CategoryList'
import CardList from './CardList'
import Card from './Card'

// TODO: reduce glut once I know which icons I need
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { far } from '@fortawesome/free-regular-svg-icons'
import { fab } from '@fortawesome/free-brands-svg-icons'
library.add(fas, far, fab)

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
    this._handleAddCategory = this._onAddCategory.bind(this)
  }

  // TODO: Hacky and Won't be needed with backend
  getNewModelId(list) {
    let currentMaxId = list.reduce((curr, next) => Math.max(curr, next.id), 0)
    return currentMaxId + 1
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

  _onAddCategory(categoryInfo) {
    const categories = this.state.categories.slice()
    const defaults = {
      id: this.getNewModelId(this.state.categories),
      name: 'New Category',
      description: 'This is a new category',
      color: 'blue', // TODO: randomize
      cards: []
    }

    const newCategory = Object.assign({}, defaults, categoryInfo)
    categories.push(newCategory)
    this.setState({categories})
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
          activeCategoryId={this.state.activeCategory.id}
          changeCategory={this._handleChangeCategory}
          addCategory={this._handleAddCategory}
        />
        <CardList
          cards={this.state.activeCategory.cards}
          activeCardId={this.state.activeCard && this.state.activeCard.id}
          changeCard={this._handleChangeCard}
        />
        <Card card={this.state.activeCard} />
      </div>
    )
  }
}

export default App
