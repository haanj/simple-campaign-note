import React, { Component } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

class CategoryList extends Component {
  constructor(props) {
    super(props)
    this.state = {
      categories: props.categories,
      activeCategoryId: props.activeCategoryId
    }
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.activeCategoryId !== this.props.activeCategoryId) {
      this.setState({ activeCategoryId: nextProps.activeCategoryId })
    }
  }

  render() {
    const categories = this.state.categories.map(category => {
      const isActive = category.id === this.state.activeCategoryId

      return (
        <li
          class={isActive ? 'active' : ''}
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
          <li key='addCategory'>
            <FontAwesomeIcon icon={['far', 'plus-square']} />
          </li>
        </ul>
      </nav>
    )
  }
}

export default CategoryList