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

    // TODO: add better comparison
    if (nextProps.categories.length !== this.props.categories.length) {
      this.setState({ categories: nextProps.categories })
    }
  }

  render() {
    const categories = this.state.categories.map(category => {
      const isActive = category.id === this.state.activeCategoryId
      const editIcon = (
        <span className='edit-button'>
          <FontAwesomeIcon icon={['far', 'edit']} />
        </span>
      )

      return (
        <li
          className={isActive ? 'active' : ''}
          alt={isActive ? 'Active Category' : ''}
          key={category.id}
          onClick={() => this.props.changeCategory(category.id)}
        >
          {category.name}
          {editIcon}
        </li>
      )
    })

    return (
      <nav className="category-list list-container">
        <ul>
          { categories }
          <li 
            className='add-button'
            key='addCategory'
            onClick={() => this.props.addCategory()}
          >
            <FontAwesomeIcon icon={['far', 'plus-square']} />
          </li>
        </ul>
      </nav>
    )
  }
}

export default CategoryList