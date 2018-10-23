import { combineReducers } from 'redux'

const words = (state = '', action) => {
  switch (action.type) {
    case 'WORDS_CHANGE': 
      return action.words
    default: 
      return state
  }
}

 const date = (state = '', action) => {
  switch (action.type) {
    case 'DATE_CHANGE':
      return action.date
    default: 
      return state
  }
}

export default combineReducers({words, date})