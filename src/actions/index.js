import * as types from './ActionTypes';

export function fetchMachinesSuccess(item) {
    return {
        type: types.FETCH_MACHINES,
        item
    };
}

export function getById(id) {
    return {
        type: types.GET_BY_ID,
        id
    };
}

export function updateMachine(id, name){
    return {
        type: types.UPDATE_MACHINES,
        id,
        name
    }
}

// export function setIp() {
//     return {
//         type: types.IP
//     };
// }

// export function setHealth() {
//     return {
//         type: types.HEALTH
//     };
// }