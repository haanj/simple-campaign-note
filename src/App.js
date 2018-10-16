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
      activeCategoryId: cards[0].id,
      activeCardId: cards[0].cards[0].id,
    }
    this.handleChangeCategory = this._onChangeCategory.bind(this)
    this.handleChangeCard = this._onChangeCard.bind(this)
    this.handleAddCategory = this._onAddCategory.bind(this)
    this.handleAddCard = this._onAddCard.bind(this);
    this.handleUpdateCard = this._onUpdateCard.bind(this);
  }

  // TODO: Hacky and Won't be needed with backend
  // TODO: doesn't actually work with cards correctly - Need better resource management
  getNewModelId(list) {
    let currentMaxId = list.reduce((curr, next) => Math.max(curr, next.id), 0)
    return currentMaxId + 1
  }

  _onChangeCategory(id) {
    const activeCategory = this.state.categories.find(category => {
      return category.id === id
    })

    const activeCard = activeCategory.cards[0] || {};

    this.setState({
      activeCategoryId: id,
      activeCardId: activeCard.id
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

  _onAddCard(categoryId, cardInfo) {
    const categories = this.state.categories.slice()
    const category = categories.find(category => category.id === categoryId)
    const cards = category.cards
    const defaults = {
      id: this.getNewModelId(cards),
      name: `New ${category.name}`,
      description: 'lorem ipsum',
      text: 'Lorem ipsum blah blah blah'
    };

    const newCard = Object.assign({}, defaults, cardInfo)
    cards.push(newCard)
    this.setState({
      categories,
      activeCardId: newCard.id
    })
  }

  // NOTE: this is pretty convoluted, and it's definitely time to priotize
  // adding data access layer instead of loading all this json into
  // component state. I'm just continuing with this for one more feature to see
  // what the UX would be like for updating the title of a card
  _onUpdateCard(cardId, newValues) {
    const activeCategoryId = this.state.activeCategoryId

    // a bit of juggling to avoid mutating original state objects
    const categories = this.state.categories.slice()

    // find index to replace element later
    const categoryIndex = categories.findIndex(category => category.id === activeCategoryId)
    const categoryToUpdate = categories[categoryIndex]

    const cardIndex = categoryToUpdate.cards.findIndex(card => card.id === cardId)
    const cardToUpdate = categoryToUpdate.cards[cardIndex]

    const newCard = Object.assign(cardToUpdate, newValues)
    categoryToUpdate.cards[cardIndex] = newCard

    this.setState({
      categories,
    })
  }

  getActiveCard() {
    const activeCardId = this.state.activeCardId
    return this.getActiveCards().find(card => card.id === activeCardId)
  }

  getActiveCards() {
    const categories = this.state.categories.slice()
    const activeCategoryId = this.state.activeCategoryId
    const activeCategory = categories
                            .find(category => category.id === activeCategoryId)
    
    return activeCategory.cards
  }

  _onChangeCard(id) {
    this.setState({ activeCardId: id })
  }

  render() {
    return (
      <div className="App">
        <CategoryList
          categories={this.state.categories}
          activeCategoryId={this.state.activeCategoryId}
          handleChangeCategory={this.handleChangeCategory}
          handleAddCategory={this.handleAddCategory}
        />
        <CardList
          cards={this.getActiveCards()} // TODO: I don't think this works right
          activeCategoryId={this.state.activeCategoryId}
          activeCardId={this.state.activeCardId}
          handleChangeCard={this.handleChangeCard}
          handleAddCard={this.handleAddCard}
        />
        <Card
          card={this.getActiveCard()} // TODO: make more better
          handleUpdateCard={this.handleUpdateCard}
        />
      </div>
    )
  }
}

export default App
