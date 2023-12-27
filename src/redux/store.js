import { createStore } from 'redux'
import { redux_reducer } from './redux_reducer'

export const store = createStore(redux_reducer)
