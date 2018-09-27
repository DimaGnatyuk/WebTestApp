import { Injectable } from "@angular/core";
import { AuthUserDto } from "../models/auth.user.dto";

@Injectable()
export class GlobalVars {

    public user?: AuthUserDto;
    
}