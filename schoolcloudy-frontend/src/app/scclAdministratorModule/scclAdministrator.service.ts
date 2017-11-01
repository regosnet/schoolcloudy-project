import { Injectable } from '@angular/core';
import { Cookie } from 'ng2-cookies/ng2-cookies';
import { Http, Headers, Response} from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { Student } from '../scclShared/scclModels/student/student';

@Injectable()
export class ScclAdmininstratorService {

    constructor(private _http: Http) {
    }

    public getAdministrator() {
        const body = JSON.stringify({internalId: 3, externalId: 'SMD454'});
        const headers = new Headers();
        headers.append('Content-Type', 'application/json' );
        return this._http.post('http://localhost:8080/schoolcloudy/school/administrator/get/administrator/username',
                body, {headers: headers});
    }

    public getAdministrators() {
        const headers = new Headers();
        headers.append('Content-Type', 'application/json' );
        return this._http.get('http://localhost:8080/schoolcloudy/school/administrator/get/all/administrators');
    }

    public getStudents() {
        const headers = new Headers();
        headers.append('Content-Type', 'application/json' );
        return this._http.get('http://localhost:8080/schoolcloudy/school/administrator/get/all/students', {headers: this.getHeaders()})
        ._catch((err) => {
            console.log('SERVER IS DOWN' + err);
            return Observable.throw(err);
        });
    }

    private getHeaders() {
        // I included these headers because otherwise FireFox
        // will request text/html instead of application/json
        const headers = new Headers();
        headers.append('Accept', 'application/json');
        return headers;
      }
}
