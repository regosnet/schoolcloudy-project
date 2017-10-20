import { Component, AfterViewInit } from '@angular/core';
import { ScclPreloaderService } from './scclShared/scclSharedService/scclPreloaderService/scclPreloader';
import { ScclGlobalState } from './scclGlobalState';


@Component({
  selector: 'sccl-main',
  templateUrl: './scclMain.html',
  styleUrls: ['./scclMain.scss']
})
export class ScclMainComponent implements AfterViewInit {
    isMenuCollapsed = false;

  constructor(private _scclSpinner: ScclPreloaderService, private _scclState: ScclGlobalState) {
      this._scclState.subscribe('menu.isCollapsed', (isCollapsed) => {
          this.isMenuCollapsed = isCollapsed;
          console.log(isCollapsed);
        });
  }

  public ngAfterViewInit(): void {
      ScclPreloaderService.load().then((values) => {
          this._scclSpinner.hide();
      });
  }
}
