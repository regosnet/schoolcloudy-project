import { Component, HostListener, OnInit, Input} from '@angular/core';
import { ScclGlobalState } from '../../../scclGlobalState';
import { ScclLayoutService } from './scclLayout.service';
import { TranslateService } from '@ngx-translate/core';
import { ScclMenuService } from '../../scclSharedService/index';
import { ScclLoginService } from '../scclLoginModule/scclLogin.service';

@Component({
    selector: 'sccl-layout',
    templateUrl: './scclLayout.html',
    styleUrls: ['./scclLayout.scss']
})
export class ScclLayoutComponent implements OnInit {

    private width: number;
    private height: number;

    @Input()
    private mainLayout;

    constructor(private _scclLayoutService: ScclLayoutService,
            private _scclTranslateService: TranslateService) {
    }
    ngOnInit(): void {
        this._scclLayoutService.windowResizer(1);
        this._scclLayoutService.getWidth().subscribe((width) => {
            this.width = width;
        });
    }

    private setLanguage(language) {
        this._scclTranslateService.use(language);
    }
}
