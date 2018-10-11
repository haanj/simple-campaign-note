import React, { Component } from 'react'

class CategoryList extends Component {
  constructor(props) {
    super(props)
    this.state = {
      categories: props.categories
    }
  }

  render() {
    const categories = this.state.categories.map(category => {
      return (
        <li
          key={category.id}
          onClick={() => this.props.changeCategory(category.id)}
        >
          {category.name}
        </li>
      )
    })

    return (
      <nav className="category-list list-container">
        <ul>
          { categories }
        </ul>
      </nav>
    )
  }
}

export default CategoryList