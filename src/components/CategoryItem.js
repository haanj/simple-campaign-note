import React, { Component } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default class CategoryList extends Component {
  constructor(props) {
    super(props)
    this.state = {
      isActive: props.isActive,
      isEditor: false,
      category: props.category
    }

    this.handleClickEdit = this._onClickEdit.bind(this)
  }

  componentWillReceiveProps(nextProps) {
    if (this.state.isActive !== nextProps.isActive) {
      this.setState({ isActive: nextProps.isActive })
    }
  }

  _onClickEdit() {

  }

  render() {
    const category = this.state.category
    const isActive = this.state.isActive

    const editIcon = (
      <span className='edit-button'>
        <FontAwesomeIcon icon={['far', 'edit']} />
      </span>
    )

    let className = 'name'
    if (isActive) className += ' active'

    const categoryName = (
      <span
        className={className}
        alt={isActive ? 'Active Category' : ''}
        onClick={() => this.props.handleChangeCategory(category.id)}
      >
        {category.name}
      </span>
    )

    return (
      <li key={category.id}>
        {categoryName}
        {editIcon}
      </li>
    )
  }
}