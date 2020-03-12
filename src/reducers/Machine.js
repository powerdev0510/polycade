import * as types from '../actions/ActionTypes';

const initialState = {
    item: []
};

export default function Machine (state = initialState, action) {
    switch(action.type){
        case types.FETCH_MACHINES:
            return {
                ...state,
                item: action.item
            };
        default:
            return state;
    }
}
