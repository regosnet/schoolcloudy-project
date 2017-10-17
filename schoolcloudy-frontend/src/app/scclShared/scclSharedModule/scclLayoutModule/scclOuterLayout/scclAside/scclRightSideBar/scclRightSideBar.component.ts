import { Component, ViewChild } from '@angular/core';
import { MatMenuTrigger } from "@angular/material/menu";
import { ScclMenuService } from "../../../../../scclSharedService/scclMenuService/scclMenuService";

@Component({
    selector: 'sccl-right-sidebar',
    templateUrl: './scclRightSidebar.html',
    styleUrls: ['./scclRightSidebar.scss']
})
export class ScclRightSidebarComponent {
    @ViewChild(MatMenuTrigger) trigger: MatMenuTrigger;
    private countries: Array<object>;
    
    someMethod() {
        this.trigger.openMenu();
      }
    
    changeLang(lang) {
        console.log(lang)
    }
    
    constructor(private _scclMenuService: ScclMenuService) {
        this.countries = this._scclMenuService.getCountries();
    }
    

}