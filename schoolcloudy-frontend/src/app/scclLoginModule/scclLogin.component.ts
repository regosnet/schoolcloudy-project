import {Component} from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from 'app/login/login.service';
import { UserImpl } from 'app/model/absract/user-impl';
import { Observable } from 'rxjs/Observable';
import 'rxjs/Rx';
import { ScclService } from 'app/theme/services/sccl-service/sccl-service';


@Component({
    selector: 'login',
    templateUrl: './login.html',
    styleUrls: ['./login.scss']
})
export class ScclLoginComponent {
    private _user: UserImpl;
private isWorking = false;
private _status_code;


constructor(private _route: Router, private _scclUserAuthentication: ScclService) {
}

submitUserForm(userFormData, event) {
    event.preventDefault();
    const loginBtn = $('.center');
    const button = $('button > .button');
    const spinner = $('.spinner');
    this._scclUserAuthentication.getUserByCredential(userFormData).subscribe(
            response => {
                if (response.status === 204){
                    loginBtn.html('Login');
                    button.removeClass('ok loading');
                    spinner.removeClass('spin');
                }else {
                    if (response.status === 202){
                        button.addClass('loading');
                        loginBtn.html('Authenticating');
                        spinner.addClass('spin');
                        if (response.json().user === 'Administrator'){
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
}
