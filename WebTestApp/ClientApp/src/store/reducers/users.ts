import { UserDto } from "../../models/user.dto";
import * as userAction from '../actions/user.actions';

export interface State {
    ids: string[];
    users: UserDto[];
}

export const initialState: State = {
    ids: [],
    users: []
};

export function reducer(state = initialState, action: userAction.Action) {
    switch (action.type) {
        case userAction.ADD: {
            const newUser: UserDto = action.payload;
            let isExist = state.users.findIndex(x=>x.id == newUser.id) != -1;
            if (!isExist){
                return {
                    ...state,
                    ids: [...state.ids, newUser.id],
                    users: [ ...state.users, newUser ]
                };
            }else{
                return state;
            }
        }
        default:
            return state;
    }
}

export const getIds = (state: State) => state.ids;
export const getUsers = (state: State) => state.users;