// NEW learned - action creators can have arguments

// Action Creator - function that returns an action object
export function itemsHasErrored(bool) {
    return {
        type: 'ITEMS_HAS_ERRORED',
        hasErrored: bool
    }
}

export function itemsIsLoading(bool) {
    return {
        type: 'ITEMS_IS_LOADING',
        isLoading: bool
    }
}

export function itemsFetchDataSuccess(items) {
    return {
        type: 'ITEMS_FETCH_DATA_SUCCESS',
        items
    }
}

//Example for Thunk
export function errorAfterFiveSeconds() {
    // We return a function instead of an action object
    //Thunk = Arrow function - can receive the store methods dispatch and getState as parameters
    return (dispatch) => {
        setTimeout(() => {
            // This function is able to dispatch other action creators
            dispatch(itemsHasErrored(true))
        }, 5000)
    }
}

export function itemsFetchData(url) {

    return (dispatch) => {
        dispatch(itemsIsLoading(true))

        fetch(url)
            .then(response => {
                if (!response.ok) {
                    //console.log(response.status, response.statusText)
                    throw Error(response.statusText)
                }
                dispatch(itemsIsLoading(false))

                return response
            })
            .then(response => {
                //console.log(response)
                return response.json()
            })
            .then(result => {
                //console.log(result)
                dispatch(itemsFetchDataSuccess(result))
            })
            .catch((err) => {
                console.log(err)
                dispatch(itemsHasErrored(true))
            })
    }
}

