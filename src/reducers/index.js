import { combineReducers } from 'redux'

const words = (state = '', action) => {
  switch (action.type) {
    case 'WORDS_CHANGE': 
      return action.words // words是plain object
    default: 
      return state
  }
}

 const city = (state = '', action) => {
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
      return action.weather
    default:
      return state
  }
}

export default combineReducers({words, city, weather})