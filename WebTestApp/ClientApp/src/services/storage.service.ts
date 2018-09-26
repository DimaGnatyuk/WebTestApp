import { Injectable } from "@angular/core";

@Injectable()
export class StorageService {
    
    public set(key: string, dto: object) {
        var json = dto ? JSON.stringify(dto) : '';
        window.localStorage.setItem(key, json);
    }

    public get(key: string): any {
        var item = window.localStorage.getItem(key);
        return item && item.length > 0 ? JSON.parse(item) : null;
    }

    public delete(key: string) {
        window.localStorage.removeItem(key);
    }
}