import React from 'react'
import { Link } from 'react-router-dom'

function PokemonItem(props) {
    return (
        <Link to={`pokemon/${props.id}`}>{props.name}</Link>
    )
}

export default PokemonItem
