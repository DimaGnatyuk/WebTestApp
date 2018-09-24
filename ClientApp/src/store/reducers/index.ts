import {
    ActionReducerMap,
    createSelector,
    createFeatureSelector,
    ActionReducer,
    MetaReducer,
} from '@ngrx/store';

import * as fromUsers from './users';

export interface State {
    films: fromUsers.State;
}

export const reducers: ActionReducerMap<State> = {
    films: fromUsers.reducer
};


export function logger(reducer: ActionReducer<State>): ActionReducer<State> {
    return function (state: State, action: any): State {
        console.log('state', state);
        console.log('action', action);
        return reducer(state, action);
    };
}

export const metaReducers: MetaReducer<State>[] = [logger];


export const getFilmState = createFeatureSelector<fromUsers.State>('films');

export const getIds = createSelector(
    getFilmState,
    fromUsers.getIds,
);

export const getFilms = createSelector(
    getFilmState,
    fromUsers.getUsers,
);

export const getSelected = createSelector(
    getFilmState,
    fromUsers.getSelected,
);

export const getSelectedFilm = createSelector(
    getSelected,
    getFilms,
    (selectedId, films) => {
        return {
            ...films[selectedId]
        };
    }
);

export const getAllFilms = createSelector(
    getIds,
    getFilms,
    (ids, films) => {
        return ids.map(id => films[id]);
    }
);