import { Component, OnInit } from '@angular/core';
import { Routes } from '@angular/router';
import { SCCL_ADMINISTRATOR_MENU, SCCL_HEADER_MENU } from './scclAdministrator.menu';
import { ScclMenuService } from '../scclShared/scclSharedService/scclMenuService/scclMenuService';
import { TranslateService } from '@ngx-translate/core';

@Component({
    selector: 'sccl-administrator',
    templateUrl: './scclAdministrator.html',
    styleUrls: ['./scclAdministrator.scss']
})
export class ScclAdministratorComponent implements OnInit {
    constructor(private _menuService: ScclMenuService, private translate: TranslateService) {
    }

    ngOnInit() {
        this._menuService.updateMenuByRoutes(<Routes>SCCL_ADMINISTRATOR_MENU);
        this._menuService.updateHeaderMenu(<Routes> SCCL_HEADER_MENU);
    }

    changeLanguage(event) {

    }
}

