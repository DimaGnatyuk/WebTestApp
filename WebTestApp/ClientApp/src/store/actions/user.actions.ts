import { Action } from '@ngrx/store';
import { UserDto } from '../../models/user.dto';

export const SELECT = '[Users] Select';
export const ADD = '[Users] Add';

export class Select implements Action {
    readonly type = SELECT;

    constructor(public payload: number) { }
}

export class Add implements Action {
    readonly type = ADD;

    constructor(public payload: UserDto) { }
}

export type Action = Add | Select;