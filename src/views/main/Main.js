import React, { useEffect } from 'react'
import { PokemonItem } from './components'
import { useDispatch, useSelector } from 'react-redux';
import { mainOperations } from '../../redux/modules/main';

function Main() {
    const { pokemon } = useSelector(store => store.mainState)
    const dispatch = useDispatch()

    useEffect(()=>dispatch(mainOperations.fetchPokemon()),[])

    return (
        <>
            <div style={{ display: 'flex', flexDirection: 'column' }}>
                {pokemon && pokemon.results.map((pokemon, index) => <PokemonItem key={index} id={index + 1} name={pokemon.name} />)}
            </div>
        </>

    )
}
export default Main
