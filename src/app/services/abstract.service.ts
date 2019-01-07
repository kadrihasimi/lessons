import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export abstract class AbstractService {

    // private apiUrl = 'http://54.93.39.176';
    private apiUrl = 'http://127.0.0.1:8000';
    private publicUrl = 'http://127.0.0.1:8000';

    protected api(route: string) {
        return `${this.apiUrl}/api/${route}`;
    }

    protected public(route: string) {
        return `${this.publicUrl}/${route}`;
    }

}