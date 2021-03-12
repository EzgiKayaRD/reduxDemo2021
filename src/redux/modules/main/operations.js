import actions from "./actions"

const operations = {
    fetchPokemon: () => dispatch => {
        dispatch(actions.setLoading(true))

        fetch('https://pokeapi.co/api/v2/pokemon/')
            .then(res => res.json())
            .then(res => {
                dispatch(actions.setLoading(false))
                dispatch(actions.setPokemon(res))
            })
    }
}

export default operations