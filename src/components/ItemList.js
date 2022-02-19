import React, { useState, useEffect } from 'react'

function ItemList() {
    const url = "http://5826ed963900d612000138bd.mockapi.io/items"
    const [hasErrored, setHasErrored] = useState(false)
    const [isLoading, setIsLoading] = useState(false)
    const [items, setItems] = useState([])



    const fetchData = () => {
        setIsLoading(true)

        fetch(url)
            .then(response => {
                if (!response.ok) {
                    throw Error(response.statusText)
                }
                setIsLoading(false)

                return response
            })
            .then(response => {
                //console.log(response)
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
}


export default ItemList

