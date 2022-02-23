//import React, { useState, useEffect } from 'react'
import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { itemsFetchData } from '../actions/itemActions'


function ItemList(props) {
    //console.log(props)

    const { fetchData } = props

    //too many items in this API
    //const url = "http://5826ed963900d612000138bd.mockapi.io/items"
    //few items in the API, cannot be modified
    const url = "http://599167402df2f40011e4929a.mockapi.io/items"

    /*     
    const [hasErrored, setHasErrored] = useState(false)
    const [isLoading, setIsLoading] = useState(false)
    const [items, setItems] = useState([]) 
    
    const fetchData = () => {
        setIsLoading(true)

        fetch(url)
            .then(response => {
                if (!response.ok) {
                    console.log(response.status, response.statusText)
                    throw Error(response.statusText)
                }
                setIsLoading(false)

                return response
            })
            .then(response => {
                console.log(response)
                return response.json()
            })
            .then(result => {
                //console.log(result)
                setItems(result)
            })
            .catch((err) => {
                console.log(err)
                setHasErrored(true)
            })
    }
    
    useEffect(fetchData, [])

    if (hasErrored) {
        return <p>Sorry! There was an error loading the items</p>
    }
    if (isLoading) {
        return <p>Loading…</p>
    }

    return (
        <ul>
            {items.map((item) => (
                <li key={item.id}>
                    {item.label}
                </li>
            ))}
        </ul>
    )

    */

    //ERROR, WHY?
    // useEffect(props.fetchData(url))

    useEffect(() => {
        fetchData(url)
    }, [fetchData])




    if (props.hasErrored) {
        return <p>Sorry! There was an error loading the items</p>
    }
    if (props.isLoading) {
        return <p>Loading…</p>
    }

    return (
        <ul>
            {props.items.map((item) => (
                <li key={item.id}>
                    {item.label}
                </li>
            ))}
        </ul>
    )
}

//Maps Redux State and the dispatching of our action creator to props??
//We create a function that accepts state and then returns an object of props
//Value is same as the name of reducers - items, itemsHasErrored, itemsIsLoading
//the keys in the object become prop names, and their corresponding values become the props values
//So you see, this function literally defines a mapping from state into props
const mapStateToProps = (state) => {
    return {
        items: state.items,
        hasErrored: state.itemsHasErrored,
        isLoading: state.itemsIsLoading
    };
}

//function to be able to dispatch our itemsFetchData() action creator with a prop
//Differs from Count App??How??


const mapDispatchToProps = (dispatch) => {
    return {
        fetchData: (url) => {
            return dispatch(itemsFetchData(url))
        }
    }
}


/*
const mapDispatchToProps = {
    fetchData: itemsFetchData
}
*/

//export default ItemList
export default connect(mapStateToProps, mapDispatchToProps)(ItemList)


