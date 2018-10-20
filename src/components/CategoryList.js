import React, { Component } from 'react'
import CategoryItem from './CategoryItem'
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
    if (nextProps.categories !== this.props.categories) {
      this.setState({ categories: nextProps.categories })
    }
  }

  render() {
    const categories = this.state.categories.map(category => {
      return (
        <CategoryItem 
          category={category}
          isActive={category.id === this.state.activeCategoryId}
          handleChangeCategory={this.props.handleChangeCategory}
        />
      )
    })

    return (
      <nav className="category-list list-container">
        <ul>
          { categories }
          <li 
            className='add-button'
            key='addCategory'
            onClick={() => this.props.handleAddCategory()}
          >
            <FontAwesomeIcon icon={['far', 'plus-square']} />
          </li>
        </ul>
      </nav>
    )
  }
}

export default CategoryList