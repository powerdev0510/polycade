import * as types from '../actions/ActionTypes';

const initialState = {
    item: []
};

export default function Machine (state = initialState, action) {
    var foundIndex = 0;
    var { item } = state;
    switch(action.type){
        case types.FETCH_MACHINES:
            return {
                ...state,
                item: action.item
            };
        case types.GET_BY_ID:
            console.log("qwerqwerwqe" + item)
            foundIndex = item.findIndex(x => x.id === action.id)
            console.log("aasdfasdfasdf" + action.id + ":" + foundIndex)
            return{
                ...state,
                index: foundIndex
            }
        case types.UPDATE_MACHINES:
            return {...state, item: state.item.map(e => e.id === action.id ? { ...e, name: action.name } : e) }
        case types.UPDATE_MACHINES_HEALTH:
            return {...state, item: state.item.map(e => e.id === action.id ? { ...e, health: action.health } : e) }
        default:
            return state;
    }
}
