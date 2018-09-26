import { UserDto } from "../../models/user.dto";
import * as userAction from '../actions/user.actions';

export interface State {
    ids: string[];
    users: { [id: string]: UserDto };
    selected: string;
}

export const initialState: State = {
    ids: [],
    users: {},
    selected: null,
};

export function reducer(state = initialState, action: userAction.Action) {
    switch (action.type) {
        case userAction.ADD: {
            const newUser: UserDto = action.payload;
            return {
                ...state,
                ids: [...state.ids, newUser.id],
                films: { ...state.users, newUser }
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