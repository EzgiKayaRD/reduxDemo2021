import { useFetch } from "../../../hooks";
import types from "./types";

const actions = {
    setPokemon: (data) => (
        {
            type: types.SET_POKEMON,
            payload: data
        }
    ),
    setLoading: (value) => (
        {
            type: types.SET_LOADING,
            payload: value
        }
    )
}

export default actions