
// there are 3 reducers as against just 1 in Counter
// Later these 3 reducers will be combined
// Combined WHERE? = in reducers/rootReducer.js using combineReducers

//every reducer will return a discrete property of the state, regardless of how many conditions are inside that reducer

export function itemsHasErrored(state = false, action) {
    switch (action.type) {
        case 'ITEMS_HAS_ERRORED':
            return action.itemsHasErrored
        default:
            return state
    }
}

export function itemsIsLoading(state = false, action) {
    switch (action.type) {
        case 'ITEMS_IS_LOADING':
            return action.isLoading
        default:
            return state
    }
}

export function items(state = [], action) {
    switch (action.type) {
        case 'ITEMS_FETCH_DATA_SUCCESS':
            return action.items
        default:
            return state
    }
}

