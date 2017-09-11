import {Component, ElementRef, HostListener, OnInit, AfterViewInit} from '@angular/core';
import { ScclGlobalState } from '../../../../../../scclGlobalState';
import { scclLayoutSizes } from "../../../scclLayout.constants";


@Component({
    selector: 'sccl-left-sidebar',
    templateUrl: './scclLeftSidebar.html',
    styleUrls: ['./scclLeftSidebar.scss']
})
export class ScclLeftSidebarComponent implements OnInit, AfterViewInit{
    public menuHeight: number;
    public isMenuCollapsed: boolean = false;
    public isMenuShouldCollapsed: boolean = false;
    private activePageTitle = '';

constructor(private _elementRef: ElementRef, private _scclState: ScclGlobalState) {
    // subscribes to Subject Observable Map array data stream 
    this._scclState.subscribe('menu.isCollapsed', (isCollapsed) => {
        this.isMenuCollapsed = isCollapsed;
    })
}

public ngOnInit(): void {
    if (this._shouldMenuCollapse()) {
        this.menuCollapse();
    }
}

public ngAfterViewInit(): void { 
    setTimeout(() => this.updateSidebarHeight());
}

@HostListener('window:resize')
public onWindowResize(): void {
    const isMenuShouldCollapsed = this._shouldMenuCollapse();
    if (this.isMenuShouldCollapsed !== isMenuShouldCollapsed) {
        this.menuCollapseStateChange(isMenuShouldCollapsed);
    }
    this.isMenuShouldCollapsed = isMenuShouldCollapsed;
    this.updateSidebarHeight();
}

public menuExpand(): void {
    this.menuCollapseStateChange(false);
}

public menuCollapse(): void {
    this.menuCollapseStateChange(true);
}

public menuCollapseStateChange(isCollapsed: boolean): void {
    this.isMenuCollapsed = isCollapsed;
    this._scclState.notifyDataChanged('menu.isCollapsed', this.isMenuCollapsed);
}

public updateSidebarHeight(): void {
    // TODO: get rid of magic 84 constant
    this.menuHeight = this._elementRef.nativeElement.childNodes[0].clientHeight - 84;
}

private _shouldMenuCollapse(): boolean {
    return window.innerWidth <= scclLayoutSizes.resWidthCollapseSidebar;
    }
}
