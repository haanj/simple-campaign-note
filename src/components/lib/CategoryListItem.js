import React, { Component } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import MicroEditor from './MicroEditor'

export default class CategoryListItem extends Component {
  constructor(props) {
    super(props)
    this.state = {
      isActive: props.isActive,
      isEditor: false,
      category: props.category
    }

    this.handleClickEdit = this._onClickEdit.bind(this)
    this.handleClickCancel = this._onClickCancel.bind(this)
  }

  componentWillReceiveProps(nextProps) {
    if (this.state.category !== nextProps.category) {
      this.setState({ category: nextProps.category })
    }
    if (this.state.isActive !== nextProps.isActive) {
      this.setState({ isActive: nextProps.isActive })
    }
  }

  _onClickEdit() {
    this.setState({ isEditor: true })
  }

  _onClickCancel() {
    this.setState({ isEditor: false })
  }

  render() {
    const category = this.state.category
    const isActive = this.state.isActive
    const isEditor = this.state.isEditor

    const editIcon = (
      <span  
        className='edit-button'
        onClick={this.handleClickEdit}
      >
        <FontAwesomeIcon icon={['far', 'edit']} />
      </span>
    )

    let className = 'name'
    if (isActive) className += ' active'

    const navCategoryName = (
      <span
        className={className}
        alt={isActive ? 'Active Category' : ''}
        onClick={() => this.props.handleChangeCategory(category.id)}
      >
        {category.name}
      </span>
    )

    const editCategoryName = (
      <MicroEditor
        text={category.name}
        defaultText='Untitled'
        handleClickCancel={this.handleClickCancel}
        handleClickConfirm={name => {
          this.setState({ isEditor: false })
          this.props.handleUpdateCategory(category.id, { name })
        }}
        isActive={true}
      />
    )

    const categoryName = isEditor ? editCategoryName : navCategoryName

    return (
      <li key={category.id}>
        {categoryName}
        {isEditor ? '' : editIcon}
      </li>
    )
  }
}