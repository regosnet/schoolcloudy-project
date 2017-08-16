import { Component } from '@angular/core';
import { Routes } from '@angular/router';
import { SCCL_ADMINISTRATOR_MENU } from './scclAdministrator.menu';
import { ScclMenuService } from '../scclShared/scclSharedService/scclMenuService/scclMenuService';

@Component({
    selector: 'sccl-administrator',
    templateUrl: './scclAdministrator.html'
})
export class ScclAdministratorComponent {
    constructor(private _menuService: ScclMenuService) {
    }

    ngOnInit() {
        this._menuService.updateMenuByRoutes(<Routes>SCCL_ADMINISTRATOR_MENU)
    }
}

