import axios from 'axios'
import { Model } from './Model'


export class RemoteModel extends Model {
  constructor(props = {}) {
    super(props)
    this.apiRoute = props.apiRoute
    this.fetch = this._onFetch.bind(this)
    this.update = this._onUpdate.bind(this)
    this.add = this._onAdd.bind(this)
  }

  async _onFetch() {
    const res = await axios(this.apiRoute)
    this.collection = res.data
  }

  async _onUpdate(attrs = {}) {
    const model = super._onUpdate(attrs)
    const res = await axios.put(`${this.apiRoute}/${attrs.id}`, model)
    return res.data
  }

  async _onAdd(attrs = {}) {
    const newAttrs = [
      {},
      this.defaults,
      attrs
    ]

    let newModel = Object.assign(...newAttrs)
    const res = await axios.post(this.apiRoute, newModel)

    newModel = res.data
    this.collection.push(newModel)
    return newModel
  }
}