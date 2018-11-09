import { combineReducers } from 'redux'

const words = (state = {}, action) => {
  switch (action.type) {
    case 'WORDS_CHANGE': 
      return action.words // words是plain object
    default: 
      return state
  }
}

 const city = (state = {}, action) => {
  switch (action.type) {
    case 'CITY_CHANGE':
      return action.city // city是plain object
    default: 
      return state
  }
}

const weather = (state = {}, action) => {
  switch (action.type) {
    case "WEATHER_CHANGE":
      return action.weather // weather是plain object
    default:
      return state
  }
}

const requestResult = (state = true, action) => {
  switch (action.type) {
    case 'REQUEST_END':
      return action.status
    default:
      return state
  }
}

const errorMsg = (state = '', action) => {
  switch (action.type) {
    case 'ERROR':
      return action.errorMsg
    default:
      return state
  }
}

export default combineReducers({words, city, weather, requestResult, errorMsg})