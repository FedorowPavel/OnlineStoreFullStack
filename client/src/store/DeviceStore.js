import {makeAutoObservable} from "mobx";

export default class DeviceStore {
  constructor() {
    this._types = []
    this._brands = []
    this._devices = []
    this._selectedType = {}
    this._selectedBrand = {}
    this._page = 1
    this._totalCount = 0
    this._limit = 2
    makeAutoObservable(this)
  }

  setPage(page) {
    this._page = page
  }

  setTotal(total) {
    this._totalCount = total
  }

  setLimit(limit) {
    this._limit = limit
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
    this.setPage(1)
    return this._selectedType
  }

  get selectedBrand() {
    return this._selectedBrand
  }

  get page() {
    return this._page
  }

  get totalCount() {
    return this._totalCount
  }

  get limit() {
    return this._limit
  }
}
