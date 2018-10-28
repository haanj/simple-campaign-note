import { Model } from './lib/Model'
import { cards, categories } from './seeds'

export const Category = new Model({
  collection: categories,
  defaults: {
    name: 'New Category',
    description: 'This is a new Category',
    color: 'red',
  }
})

export const Card = new Model({
  collection: cards,
  defaults: {
    name: 'New Card',
    description: 'This is a new card',
    content: 'Insert text here' 
  }
})