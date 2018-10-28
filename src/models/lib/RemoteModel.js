import axios from 'axios'
import { Model } from './Model'


export class RemoteModel extends Model {
  constructor(props = {}) {
    super(props)
    this.apiRoute = props.apiRoute
    this.fetch = this._onFetch.bind(this)
  }

  async _onFetch() {
    const res = await axios(this.apiRoute)
    this.collection = res.data
  }
}