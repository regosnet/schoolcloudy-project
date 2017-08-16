import {Component} from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import 'rxjs/Rx';
import { ScclLoginService } from './scclLogin.service';
import * as $ from 'jquery';
import { TranslateService } from '@ngx-translate/core';
import { UserImpl } from '../../scclModels/absract/user-impl';



@Component({
    selector: 'sccl-login',
    templateUrl: './scclLogin.html',
    styleUrls: ['./scclLogin.scss']
})
export class ScclLoginComponent {
    private _user: UserImpl;




constructor(private _route: Router, private _scclUserAuthentication: ScclLoginService, private translate: TranslateService) {
}
/*
submitUserForm(userFormData, event) {
    event.preventDefault();
    const loginBtn = $('.center');
    const button = $('button > .button');
    const spinner = $('.spinner');
    this._scclUserAuthentication.getUserByCredential(userFormData).subscribe(
            response => {
                if (response.status === 204) {
                    loginBtn.html('Login');
                    button.removeClass('ok loading');
                    spinner.removeClass('spin');
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
}*/
changeLang(language: string) {
    this.translate.use(language);
}
}
