import {Component} from '@angular/core';
import { Router, Routes } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import 'rxjs/Rx';
import { ScclLoginService } from './scclLogin.service';
import * as $ from 'jquery';
import { TranslateService } from '@ngx-translate/core';
import { UserImpl } from '../../scclModels/absract/user-impl';
import { ScclMenuService } from '../../scclSharedService/scclMenuService/scclMenuService';
import { SCCL_HEADER_MENU } from './scclLoginMenu';
import { Cookie } from 'ng2-cookies/ng2-cookies';
import { ScclGlobalState } from '../../../scclGlobalState';



@Component({
    selector: 'sccl-login',
    templateUrl: './scclLogin.html',
    styleUrls: ['./scclLogin.scss']
})
export class ScclLoginComponent {
    private _user: UserImpl;
    private loginMsg = false;
    private path = 'http://localhost:8080/schoolcloudy/login/check-get-user-by/credential';




constructor(private _route: Router,
        private _scclUserAuthentication: ScclLoginService,
        private translate: TranslateService,
        private _menuService: ScclMenuService,
        private _scclState: ScclGlobalState) {
    this._menuService.updateHeaderMenu(<Routes> SCCL_HEADER_MENU);
}

submitUserForm(userFormData, event) {
    const cdate = new Date();
    event.preventDefault();
    const loginBtn = $('.center');
    const button = $('button > .button');
    const spinner = $('.spinner');
    this._scclUserAuthentication.getUserByCredential(userFormData).subscribe(
            response => {
                if (response.status === 204) {
                    this.loginMsg = true;
                }else {
                    if (response.status === 202) {
                        button.addClass('loading');
                        loginBtn.html('Authenticating');
                        spinner.addClass('spin');
                        setTimeout(() => {
                            if (response.json().user === 'Administrator') {
                                this._route.navigate(['/administrator']);
                               document.cookie = 'username=' + response.json().credential.username + ';'
                               + 'expires=Mon, 18 Sep 2017 20:00:11 UTC';
                                this._scclState.loggedIn.next(true);
                                sessionStorage.setItem('username', response.json());
                            }
                        }, 1000);
                    }
                }
            },
            error => {
                console.log(error);
            }
    );
    }

    setSessionTime() {
        const d1 = new Date (),
        d2 = new Date ( d1 );
        d2.setUTCMinutes(d1.getUTCMinutes() + 2 );
        console.log(d2)
        return d2;
    }
}
