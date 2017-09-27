import { Injectable } from '@angular/core';
import { Cookie } from 'ng2-cookies/ng2-cookies';
import { Http, Headers, Response} from '@angular/http';

@Injectable()
export class ScclAdmininstratorService {

    constructor(private http: Http) {
    }

    getAdministrator() {
        const body = JSON.stringify({internalId: 3, externalId: 'SMD454'});
        const headers = new Headers();
        headers.append('Content-Type', 'application/json' );
        return this.http.post('http://localhost:8080/schoolcloudy/school/administrators/administrator', body, {headers: headers});
    }
}
