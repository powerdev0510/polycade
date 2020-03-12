import * as types from './ActionTypes';

export function fetchMachinesSuccess(item) {
    return {
        type: types.FETCH_MACHINES,
        item
    };
}

export function updateMachine(id, name){
    return {
        type: types.UPDATE_MACHINES,
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