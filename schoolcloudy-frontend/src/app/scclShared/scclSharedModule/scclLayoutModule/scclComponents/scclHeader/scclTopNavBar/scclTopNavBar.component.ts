import { Component, Input, AfterViewInit } from '@angular/core';
import { ScclGlobalState } from '../../../../../../scclGlobalState';

@Component({
    selector: 'sccl-top-navbar',
    templateUrl: './scclTopNavBar.html',
    styleUrls: ['./scclTopNavBar.scss']
})

export class ScclTopNavBarComponent {
    public isScrolled = false;
    public isMenuCollapsed = false;

constructor(private _scclState: ScclGlobalState) {
  this._scclState.subscribe('menu.isCollapsed', (isCollapsed) => {
    this.isMenuCollapsed = isCollapsed;
  });
}

public toggleMenu() {
  this.isMenuCollapsed = !this.isMenuCollapsed;
  this._scclState.notifyDataChanged('menu.isCollapsed', this.isMenuCollapsed);
  return false;
}

public scrolledChanged(isScrolled) {
  this.isScrolled = isScrolled;
}
}
