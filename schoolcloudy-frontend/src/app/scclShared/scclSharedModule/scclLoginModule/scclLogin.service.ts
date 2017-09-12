import { Injectable } from '@angular/core';
import { Http, Headers, Response} from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/Rx';


@Injectable()
export class ScclLoginService {

    constructor(private http: Http) {

    }

    public getUserByCredential(data) {
        const body = JSON.stringify(data);
        const headers = new Headers();
        headers.append('Content-Type', 'application/json' );
        return this.http.post('http://localhost:8080/schoolcloudy/login/check-get-user-by/credential', body, {headers: headers});
    }
}
