/* @flow*/

import { createStore, applyMiddleware, compose } from 'redux'
import createLogger from 'redux-logger'
import rootReducer from './reducers/reducers'

const configureStore = preloadedState => createStore(
        rootReducer,
        preloadedState,
        compose(
            applyMiddleware(createLogger())
        )
    )

const store = configureStore()

export default store
