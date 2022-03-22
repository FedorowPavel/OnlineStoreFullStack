import {makeAutoObservable} from "mobx";

export default class DeviceStore {
  constructor() {
    this._types = [
      {id: 1, name: 'fridge'},
      {id: 2, name: 'phones'},
      {id: 3, name: 'watches'},
      {id: 4, name: 'laptops'},
    ]
    this._brands = [
      {id: 1, name: 'samsung'},
      {id: 2, name: 'apple'},
      {id: 3, name: 'lenovo'},
      {id: 4, name: 'asus'},
    ]
    this._devices = [
      {id: 1, name: 'iphone 12 pro', price: 2500, rating: 5, img: 'url'},
      {id: 2, name: 'iphone 12 pro', price: 2500, rating: 5, img: 'url'},
      {id: 3, name: 'iphone 12 pro', price: 2500, rating: 5, img: 'url'},
      {id: 4, name: 'iphone 12 pro', price: 2500, rating: 5, img: 'url'},
      {id: 5, name: 'iphone 12 pro', price: 2500, rating: 5, img: 'url'},
    ]
    this._selectedType = {}
    this._selectedBrand = {}
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

  setSelectedType(type) {
    this._selectedType = type
  }

  setSelectedBrand(brand) {
    this._selectedBrand = brand
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

  get selectedType() {
    return this._selectedType
  }

  get selectedBrand() {
    return this._selectedBrand
  }
}
