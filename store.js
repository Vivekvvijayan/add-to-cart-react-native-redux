import { createStore } from 'redux'
import cartReducer from './src/reducers/cartReducer'


export const store = createStore(cartReducer)