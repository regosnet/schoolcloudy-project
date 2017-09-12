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



@Component({
    selector: 'sccl-login',
    templateUrl: './scclLogin.html',
    styleUrls: ['./scclLogin.scss']
})
export class ScclLoginComponent {
    private _user: UserImpl;
    private loginMsg = false;




constructor(private _route: Router, private _scclUserAuthentication: ScclLoginService,
            private translate: TranslateService, private _menuService: ScclMenuService ) {
        this._menuService.updateHeaderMenu(<Routes> SCCL_HEADER_MENU);
}

submitUserForm(userFormData, event) {
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
                        if (response.json().user === 'Administrator') {
                            this._route.navigate(['/administrator']);
                        }
                    }
                }
            },
            error => {
                console.log(error);
            }
    );
}

changeLang(lang) {
    this.translate.use(lang);
}
}
