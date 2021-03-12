import React from 'react'
import { useParams } from 'react-router'
import { useFetch } from '../../hooks'

function Details() {

    const { id } = useParams()
    const { data } = useFetch(`https://pokeapi.co/api/v2/pokemon/${id}`)

    return (
        <div>
            {data && data.name}
        </div>
    )
}

export default Details
