import { Component, Input, AfterViewInit, OnInit, EventEmitter, Output } from '@angular/core';
import { ScclGlobalState } from '../../../../../../scclGlobalState';
import { ScclMenuService } from '../../../../../scclSharedService/scclMenuService/scclMenuService';
import { TranslateService } from '@ngx-translate/core';

@Component({
    selector: 'sccl-top-navbar',
    templateUrl: './scclTopNavBar.html',
    styleUrls: ['./scclTopNavBar.scss']
})
export class ScclTopNavBarComponent implements OnInit {

    @Output()
    private chooseLanguage = new EventEmitter<any>();
    private selectedLanguage = {name: 'English', icon: 'gb'};

    private menuItems: any;

    public isScrolled = false;
    public isMenuCollapsed = false;

    constructor(private _menuService: ScclMenuService, private translate: TranslateService) {
        this.menuItems = {status: 'Admin'};
    }

    public scrolledChanged(isScrolled) {
        this.isScrolled = isScrolled;
    }

    public ngOnInit(): void {
       this._menuService.scclHeaderMenuItems.subscribe(res => this.menuItems = res[0]);
       setTimeout(() => {
           console.log(this.menuItems);
       }, 1000);
      }

    changeLang(language: string) {
        switch (language) {
            case 'lv':
                this.selectedLanguage = {name: 'sccl.languages.lv', icon: 'lv'};
            break;
            case 'en':
                this.selectedLanguage = {name: 'sccl.languages.en', icon: 'gb'};
            break;

            default:
            break;
}
        this.translate.use(language);
    }
}
