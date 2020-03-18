import { createAction } from 'redux-actions';
import * as types from './ActionTypes';

export const fetchMachinesSuccess = createAction(types.FETCH_MACHINES);
export const updateMachine = createAction(types.UPDATE_MACHINE, (id, data) => ({id, data}));