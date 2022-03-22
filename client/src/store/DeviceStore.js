import {makeAutoObservable} from "mobx";

export default class DeviceStore {
  constructor() {
    this._types = [
      {id: 1, name: 'fridge'},
      {id: 2, name: 'phones'},
    ]
    this._brands = [
      {id: 1, name: 'samsung'},
      {id: 2, name: 'apple'},
    ]
    this._devices = [
      {id: 1, name: 'iphone 12 pro', price: 2500, rating: 5, img: 'url'},
      {id: 2, name: 'iphone 12 pro', price: 2500, rating: 5, img: 'url'},
      {id: 3, name: 'iphone 12 pro', price: 2500, rating: 5, img: 'url'},
      {id: 4, name: 'iphone 12 pro', price: 2500, rating: 5, img: 'url'},
      {id: 5, name: 'iphone 12 pro', price: 2500, rating: 5, img: 'url'},
    ]
    makeAutoObservable(this)
  }

  setTypes(types) {
    this._types = types
  }

  setBrands(brands) {
    this._brands = brands
  }

  setDevices(devices) {
    this._devices = devices
  }

  get types() {
    return this._types
  }

  get brands() {
    return this._brands
  }

  get devices() {
    return this._devices
  }
}
