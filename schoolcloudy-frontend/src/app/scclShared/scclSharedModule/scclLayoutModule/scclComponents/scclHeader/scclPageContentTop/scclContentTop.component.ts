import {Component, Input, ChangeDetectorRef} from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { ScclGlobalState } from '../../../../../../scclGlobalState';


@Component ({
  selector: 'sccl-content-top',
  styleUrls: ['./scclContentTop.scss'],
  templateUrl: './scclContentTop.html',
})
export class ScclPageContentTopComponent {
  private selectedLanguage = {name: 'English', icon: 'gb'};
  private activePageTitle = '';

  constructor(
          private _scclState: ScclGlobalState,
          private cdRef: ChangeDetectorRef,
          private translate: TranslateService) {
    this._scclState.subscribe('menu.activeLink', (activeLink) => {
      if (activeLink) {
        this.activePageTitle = activeLink.title;
        this.cdRef.detectChanges();
      }
    });
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
