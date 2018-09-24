import { UserDto } from "../../models/user.dto";
import * as userAction from '../actions/user.actions';

export interface State {
    ids: number[];
    users: { [id: number]: UserDto };
    selected: number;
}

export const initialState: State = {
    ids: [],
    users: {},
    selected: null,
};

export function reducer(state = initialState, action: userAction.Action) {
    switch (action.type) {
        case userAction.ADD: {
            const newFilm: UserDto = action.payload;
            return {
                ...state,
                ids: [...state.ids, newFilm.id],
                films: { ...state.users, newFilm }
            };
        }
        case userAction.SELECT: {
            const id = action.payload;
            return {
                ...state,
                selected: id
            };
        }
        default:
            return state;
    }
}

export const getIds = (state: State) => state.ids;
export const getUsers = (state: State) => state.users;
export const getSelected = (state: State) => state.selected;