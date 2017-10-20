import { Component, ViewChild, EventEmitter, Output } from '@angular/core';
import { MatMenuTrigger } from "@angular/material/menu";
import { ScclMenuService } from "../../../../../scclSharedService/scclMenuService/scclMenuService";
import { TranslateService } from "@ngx-translate/core";

@Component({
    selector: 'sccl-right-sidebar',
    templateUrl: './scclRightSidebar.html',
    styleUrls: ['./scclRightSidebar.scss']
})
export class ScclRightSidebarComponent {
    @ViewChild(MatMenuTrigger) trigger: MatMenuTrigger;
    private countries: Array<object>;
    
    @Output() 
    private lanaguage = new EventEmitter()
    
    
    
    constructor(private _scclMenuService: ScclMenuService, private _scclTranslateService: TranslateService) {
        this.countries = this._scclMenuService.getCountries();
    }
    
    someMethod() {
        this.trigger.openMenu();
      }
    
    private setLanguage(language) {
        this.lanaguage.emit(language)
    }
    

}