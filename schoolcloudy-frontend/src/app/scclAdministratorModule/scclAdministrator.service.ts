import { Injectable } from '@angular/core';
import { Cookie } from 'ng2-cookies/ng2-cookies';
import { Http, Headers, Response} from '@angular/http';

@Injectable()
export class ScclAdmininstratorService {

    constructor(private http: Http) {

    }

    getAdministrator(username) {
        const body = JSON.stringify(username);
        const headers = new Headers();
        headers.append('Content-Type', 'application/json' );
        return this.http.post('http://localhost:8080/schoolcloudy/school/administrators/administrator', body, {headers: headers});
    }
}
