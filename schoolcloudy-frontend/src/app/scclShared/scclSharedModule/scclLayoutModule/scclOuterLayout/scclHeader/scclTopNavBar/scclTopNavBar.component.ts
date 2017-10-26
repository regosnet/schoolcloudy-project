import { Component, Input, AfterViewInit, OnInit, EventEmitter, Output, ChangeDetectorRef } from '@angular/core';
import { ScclGlobalState } from '../../../../../../scclGlobalState';
import { ScclMenuService } from '../../../../../scclSharedService/scclMenuService/scclMenuService';
import { TranslateService } from '@ngx-translate/core';

@Component({
    selector: 'sccl-top-navbar',
    templateUrl: './scclTopNavBar.html',
    styleUrls: ['./scclTopNavBar.scss']
})
export class ScclTopNavBarComponent implements OnInit {


    private menuItems: any;

    public isScrolled = false;
    public isMenuCollapsed = false;

    constructor(private _menuService: ScclMenuService,
            private translate: TranslateService,
            private cdRef: ChangeDetectorRef,
            private _scclState: ScclGlobalState) {
       this._scclState.subscribe('menu.isCollapsed', (isCollapsed) => {
            this.isMenuCollapsed = isCollapsed;
          });
    }

    public scrolledChanged(isScrolled) {
        this.isScrolled = isScrolled;
    }

    // initializes the menu data from the user in sccl header
    public ngOnInit(): void {
       this._menuService.scclHeaderMenuItems.subscribe(res => {
           this.menuItems = res;
       });
      }

    public toggleMenu() {
        this.isMenuCollapsed = !this.isMenuCollapsed;
        this._scclState.notifyDataChanged('menu.isCollapsed', this.isMenuCollapsed);
        return false;
      }
}
