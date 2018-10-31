import { createStore, applyMiddleware } from 'redux'
import rootReducer from './reducers'
import thunk from 'redux-thunk'


const initState = {
  words: {
    text: '我实实在在地告诉你们：一粒麦子不落在地里死了，仍旧是一粒；若是死了，就结出许多子粒来。'
  },
  city: {
    "_id": 1,
    "id": 1,
    "pid": 0,
    "city_code": "101010100",
    "city_name": "北京"
  }
}
const configureStore = createStore(rootReducer, initState, applyMiddleware(thunk))

export default configureStore