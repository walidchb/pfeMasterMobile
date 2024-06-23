// configureStore.js

import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk' // Example of middleware, you can add more as needed
import rootReducer from '../reducers' // Assuming you have a rootReducer

const configureStore = () => {
  const store = createStore(
    rootReducer
    // applyMiddleware(thunk) // Applying middleware, in this case, redux-thunk
  )
  return store
}

export default configureStore
