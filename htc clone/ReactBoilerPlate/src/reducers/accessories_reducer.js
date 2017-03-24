import { GET_ALL_ACCESSORIES } from '../actions/index'
const INITIAL_STATE = {all: [], post: null };
export default function(state = INITIAL_STATE, action) {
    switch(action.type) {
        case GET_ALL_ACCESSORIES:
            return {...state, all: action.payload.data}
        default:
            return state;
    }
}