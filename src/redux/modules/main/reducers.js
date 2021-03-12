import { combineReducers } from "redux";
import types from "./types";

const reducer = combineReducers({
    pokemon: (state=null, action) =>{
        switch(action.type){
            case types.SET_POKEMON:
                return action.payload
            default:
                return state
        }
    },

    loading: (state=false, action)=>{
        switch(action.type){
            case types.SET_LOADING:
                return action.payload
            default:
                return state
        }
    }
})

export default reducer