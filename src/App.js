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
      activeCard: newCard
    })
  }

  // NOTE: this is pretty convoluted, and it's definitely time to priotize
  // adding data access layer instead of loading all this json into
  // component state. I'm just continuing with this for one more feature to see
  // what the UX would be like for updating the title of a card
  _onUpdateCard(cardId, newValues) {
    const cards = this.state.activeCategory.cards.slice()
    const categories = this.state.categories.slice()
    const activeCategoryId = this.state.activeCategory.id
    const card = cards.find(card => card.id === cardId)
    const newCard = Object.assign(card, newValues)

    // a bit of juggling to avoid mutating original state objects
    const categoryIndex = categories.findIndex(category => category.id === activeCategoryId)
    const activeCategory = categories[categoryIndex]
    activeCategory.cards = cards

    const cardIndex = cards.findIndex(card => card.id === cardId)
    activeCategory.cards[cardIndex] = newCard

    this.setState({
      categories,
      activeCategory
    })
  }

  _onChangeCard(id) {
    const activeCard = this.state
                           .activeCategory
                           .cards
                           .find(card => card.id === id)

    this.setState({ activeCard })
  }

  render() {
    return (
      <div className="App">
        <CategoryList
          categories={this.state.categories}
          activeCategoryId={this.state.activeCategory.id}
          handleChangeCategory={this.handleChangeCategory}
          handleAddCategory={this.handleAddCategory}
        />
        <CardList
          cards={this.state.activeCategory.cards}
          activeCategoryId={this.state.activeCategory.id}
          activeCardId={this.state.activeCard && this.state.activeCard.id}
          handleChangeCard={this.handleChangeCard}
          handleAddCard={this.handleAddCard}
        />
        <Card
          card={this.state.activeCard}
          handleUpdateCard={this.handleUpdateCard}
        />
      </div>
    )
  }
}

export default App
