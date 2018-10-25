/**
 * Base Model for collections
 * - Roughly based off Rails activerecords
 */
export class Model {
  constructor(props = {}) {
    this._initializeCollection(props.collection)
    this.defaults = Object.freeze(props.defaults)

    this.length = this._onGetLength.bind(this)
    this.all = this._onGetAll.bind(this)
    this.findById = this._onFindById.bind(this)
    this.findWhere = this._onFindWhere.bind(this)
    this.add = this._onAdd.bind(this)
    this.update = this._onUpdate.bind(this)
  }

  _initializeCollection(collection = []) {
    this.collection = this._copy(collection)
  }

  // quick copies arrays/objects
  _copy(obj = {}) {
    return JSON.parse(JSON.stringify(obj))
  }

  _onGetAll() {
    return this._copy(this.collection)
  }

  _onGetLength() {
    return this.collection.length
  }

  /**
   * takes an ID and returns the first model that matches
   * TODO: refine and allow search by params
   */
  _onFindById(id) {
    const model = this.collection.find(model => model.id === id)
    return model ? this._copy(model) : undefined
  }

  /**
   * Returns a filtered collection by a search query
   */
  _onFindWhere(query = {}) {
    let collection = this.all(this.collection)
    const params = Object.keys(query)
    params.forEach(param => {
      const value = query[param]
      collection = collection.filter(item => item[param] === value)
    })

    return collection
  }

  /**
   * Adds a new object to the collection
   * Returns the new item, with defaults added
   */
  _onAdd(attrs = {}) {
    const newAttrs = [
      {},
      this.defaults,
      { id: this._getNewId() },
      attrs,
    ]

    const newModel = Object.assign(...newAttrs)
    this.collection.push(newModel)
    return this._copy(newModel)
  }

  /**
   * Updates a model in the collection
   * Attributes must include model id
   */
  _onUpdate(attrs = {}) {
    const modelId = attrs.id
    if (!attrs.id) return 

    // going to create a new collection to track mutations
    // not entirely sure if this will be necessary.. but..
    const newCollection = this._copy(this.collection)
    let model = newCollection.find(model => model.id === modelId)
    if (!model) return

    model = Object.assign(model, attrs)
    this.collection = newCollection
    return this._copy(model)
  }

  _getNewId() {
    const maxId = this.collection.reduce((max, next) => {
      return Math.max(max, next.id)
    }, 0)
    return maxId + 1
  }
}