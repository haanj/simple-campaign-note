/**
 * Base Model for collections
 * - Roughly based off Rails concept of data models
 */
export class Model {
  constructor(props = {}) {
    this._initializeCollection(props.collection)
    this.defaults = this._copy(props.defaults)

    this.length = this._onGetLength.bind(this)
    this.all = this._onGetAll.bind(this)
    this.find = this._onFind.bind(this)
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
  _onFind(id) {
    const model = this.collection.find(model => model.id === id)
    return model ? this._copy(model) : undefined
  }

  /**
   * Adds a new object to the collection
   * Returns the new item, with defaults added
   */
  _onAdd(attrs = {}) {
    const newAttrs = [
      attrs,
      this.defaults,
      { id: this._getNewId() }
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