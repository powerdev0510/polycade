import * as types from '../actions/ActionTypes';
import { handleActions } from 'redux-actions';

const initialState = {
    item: []
};

// export default function Machine (state = initialState, action) {
//     var foundIndex = 0;
//     var { item } = state;    
//     switch(action.type){
//         case types.FETCH_MACHINES:
//             return {
//                 ...state,
//                 item: action.payload
//             };
//         case types.GET_BY_ID:
//             foundIndex = item.findIndex(x => x.id === action.payload)
//             return{
//                 ...state,
//                 index: foundIndex
//             }
//         case types.UPDATE_MACHINES:
//             return {...state, item: state.item.map(e => e.id === action.payload.id ? { ...e, name: action.payload.name } : e) }
//         case types.UPDATE_MACHINES_HEALTH:
//             return {...state, item: state.item.map(e => e.id === action.payload.id ? { ...e, health: action.payload.health } : e) }
//         default:
//             return state;
//     }
// }

export default handleActions ({
    [types.FETCH_MACHINES]: (state, action) => ({...state, item: action.payload }),
    [types.UPDATE_MACHINE]: (state, action) => ({...state, item: state.item.map(e => e.id === action.payload.id ? { ...e, ...action.payload.data } : e) }),
}, initialState)
