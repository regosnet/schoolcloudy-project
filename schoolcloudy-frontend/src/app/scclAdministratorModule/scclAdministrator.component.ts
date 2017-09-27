import { Component, OnInit } from '@angular/core';
import { Routes } from '@angular/router';
import { SCCL_ADMINISTRATOR_MENU, SCCL_HEADER_MENU } from './scclAdministrator.menu';
import { ScclMenuService } from '../scclShared/scclSharedService/scclMenuService/scclMenuService';
import { TranslateService } from '@ngx-translate/core';
import { ScclAdmininstratorService } from './scclAdministrator.service';
import { Cookie } from 'ng2-cookies/ng2-cookies';
import { ScclGlobalState } from '../scclGlobalState';
import { Administrator } from '../scclShared/scclModels/administrator/administrator';

@Component({
    selector: 'sccl-administrator',
    templateUrl: './scclAdministrator.html',
    styleUrls: ['./scclAdministrator.scss']
})
export class ScclAdministratorComponent implements OnInit {

    private administrator: Administrator;
    private internalId = sessionStorage.getItem('int_id');
    private externalId = sessionStorage.getItem('ext_id');

    constructor(private _menuService: ScclMenuService,
                private translate: TranslateService,
                private _administratorService: ScclAdmininstratorService,
                private _scclGlobalState: ScclGlobalState) {

        this._administratorService.getAdministrator().subscribe((response) => {
            console.log(response);
        });

        this._scclGlobalState.loggedIn.subscribe(res => console.log(res));
    }

    ngOnInit() {
        this._menuService.updateMenuByRoutes(<Routes>SCCL_ADMINISTRATOR_MENU);
        this._menuService.updateHeaderMenu(<Routes> SCCL_HEADER_MENU);
    }

}

