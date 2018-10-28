import React, { Component } from 'react'
import { Category, Card } from '../../models'
import { CategoryList, CardList, CardEditor } from '../lib'

class App extends Component {
  constructor(props) {
    super(props)

    const categories = Category.all()
    const activeCategoryId = categories[0].id
    const cards = Card.findWhere({ category_id: activeCategoryId })
    const activeCardId = cards[0].id
    
    this.state = { 
      categories,
      cards,
      activeCategoryId,
      activeCardId,
    }

    this.handleAddCategory = this._onAddCategory.bind(this)
    this.handleChangeCategory = this._onChangeCategory.bind(this)
    this.handleUpdateCategory = this._onUpdateCategory.bind(this)
    this.handleChangeCard = this._onChangeCard.bind(this)
    this.handleAddCard = this._onAddCard.bind(this)
    this.handleUpdateCard = this._onUpdateCard.bind(this)
  }

  _onChangeCategory(id) {
    const cards = Card.findWhere({ category_id: id })
    const activeCard = cards[0] || {}

    this.setState({
      activeCategoryId: id,
      activeCardId: activeCard.id
    })
  }

  _onAddCategory(categoryInfo) {
    const newCategory = Category.add(categoryInfo)
    this.setState({
      categories: Category.all(),
      activeCategoryId: newCategory.id
    })
  }

  _onUpdateCategory(categoryId, newValues = {}) {
    const newParams = Object.assign({ id: categoryId }, newValues)
    Category.update(newParams)
    this.setState({
      categories: Category.all()
    })
  }

  _onAddCard(categoryId, cardInfo) {
    const newParams = Object.assign({}, { category_id: categoryId }, cardInfo)
    const newCard = Card.add(newParams)

    this.setState({
      cards: Card.all(),
      activeCardId: newCard.id
    })
  }

  _onUpdateCard(cardId, newValues = {}) {
    const newParams = Object.assign({ id: cardId }, newValues)
    Card.update(newParams)
    this.setState({
      cards: Card.all()
    })
  }

  getActiveCard() {
    const activeCardId = this.state.activeCardId
    return Card.findById(activeCardId)
  }

  getActiveCards() {
    const activeCategoryId = this.state.activeCategoryId
    return Card.findWhere({ category_id: activeCategoryId })
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
          handleUpdateCategory={this.handleUpdateCategory}
        />
        <CardList
          cards={this.getActiveCards()} // TODO: I don't think this works right
          activeCategoryId={this.state.activeCategoryId}
          activeCardId={this.state.activeCardId}
          handleChangeCard={this.handleChangeCard}
          handleAddCard={this.handleAddCard}
        />
        <CardEditor
          card={this.getActiveCard()} // TODO: make more better
          handleUpdateCard={this.handleUpdateCard}
        />
      </div>
    )
  }
}

export default App
