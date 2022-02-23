import { combineReducers } from 'redux'
import { items, itemsHasErrored, itemsIsLoading } from './itemReducer'

//As our reducer names are identical to what we want to use for a store's property names, we can use the ES6 shorthand
export default combineReducers({
    items: items,
    itemsHasErrored: itemsHasErrored,
    itemsIsLoading: itemsIsLoading
})

