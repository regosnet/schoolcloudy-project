import {Component, Input } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { ScclGlobalState } from '../../../../../../scclGlobalState';


@Component ({
  selector: 'sccl-content-top',
  styleUrls: ['./scclContentTop.scss'],
  templateUrl: './scclContentTop.html',
})
export class ScclPageContentTopComponent {
  private activePageTitle = '';

  constructor(
          private _scclState: ScclGlobalState, private translate: TranslateService) {
      this._scclState.subscribe('menu.activeLink', (res) => {
          setTimeout(() => this.activePageTitle = res.title);
         });
  }
}
