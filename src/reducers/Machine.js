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
            foundIndex = item.findIndex(x => x.id === action.id)
            return{
                ...state,
                index: foundIndex
            }
        case types.UPDATE_MACHINES:
            foundIndex = item.findIndex(x => x.id === action.id)
            state.item[foundIndex].name = action.name
            return {
                ...state,
            }
        default:
            return state;
    }
}
