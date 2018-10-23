import { createStore, applyMiddleware } from 'redux'
import rootReducer from './reducers'
import thunk from 'redux-thunk'


const initState = {
  words: {
    text: '我实实在在地告诉你们：一粒麦子不落在地里死了，仍旧是一粒；若是死了，就结出许多子粒来。'
  },
  date: new Date(),
}
const configureStore = createStore(rootReducer, initState, applyMiddleware(thunk))

export default configureStore