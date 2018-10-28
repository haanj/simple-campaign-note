// import { Model } from './lib/Model'
import { RemoteModel } from './lib/RemoteModel'

// import { cards, categories } from './seeds'

export const Category = new RemoteModel({
  apiRoute: 'api/v1/categories',
  defaults: {
    name: 'New Category',
    description: 'This is a new Category',
    color: 'red',
  }
})

export const Card = new RemoteModel({
  apiRoute: 'api/v1/cards',
  defaults: {
    name: 'New Card',
    description: 'This is a new card',
    content: 'Insert text here' 
  }
})