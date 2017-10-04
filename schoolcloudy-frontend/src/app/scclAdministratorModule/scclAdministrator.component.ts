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

    constructor(private _menuService: ScclMenuService,
                private translate: TranslateService,
                private _administratorService: ScclAdmininstratorService,
                private _scclGlobalState: ScclGlobalState) {
    }

    ngOnInit() {
        const listOfStudents = this._administratorService.getStudents().subscribe((res) => {
            this._scclGlobalState.notifyDataChanged('menu.student', res.json());
        });
        this._menuService.updateMenuByRoutes(<Routes>SCCL_ADMINISTRATOR_MENU);
        this._menuService.updateHeaderMenu(<Routes> SCCL_HEADER_MENU);
    }

}

