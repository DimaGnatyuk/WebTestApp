import {
    ActionReducerMap,
    createSelector,
    createFeatureSelector,
    ActionReducer,
    MetaReducer,
} from '@ngrx/store';

import * as fromUsers from './users';

export interface State {
    users: any;
}

export const reducers: ActionReducerMap<State> = {
    users: fromUsers.reducer
};


export function logger(reducer: ActionReducer<State>): ActionReducer<State> {
    return function (state: State, action: any): State {
        console.log('state', state);
        console.log('action', action);
        return reducer(state, action);
    };
}

export const metaReducers: MetaReducer<State>[] = [logger];


export const getUserState = createFeatureSelector<fromUsers.State>('users');

export const getIds = createSelector(
    getUserState,
    fromUsers.getIds,
);

export const getUsers = createSelector(
    getUserState,
    fromUsers.getUsers,
);

export const getAllUsers = createSelector(
    getIds,
    getUserState,
    (ids, users) => {
        return ids.map(id => users[id]);
    }
);