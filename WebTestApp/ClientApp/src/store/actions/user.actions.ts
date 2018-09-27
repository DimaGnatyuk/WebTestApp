import { Action } from '@ngrx/store';
import { UserDto } from '../../models/user.dto';

export const ADD = '[Users] Add';

export class Add implements Action {
    readonly type = ADD;
    constructor(public payload: UserDto) { }
}

export type Action = Add;