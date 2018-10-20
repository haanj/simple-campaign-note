import React from 'react'

export default function CardListItem(props) {
  let className = 'name'
  if (props.isActive) className += ' active'

  return (
    <span
      className={className}
      alt={props.isActive ? 'Active Card' : ''}
      onClick={() => props.handleChangeCard(props.card.id)}
    >
      {props.card.name}
    </span>
  )
}