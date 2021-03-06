import {Component, Input, Output, EventEmitter, AfterViewInit} from '@angular/core';

@Component({
  selector: 'sccl-menu-item',
  templateUrl: './scclMenuItem.html',
  styleUrls: ['./scclMenuItem.scss']
})
export class ScclMenuItemComponent implements AfterViewInit {

  @Input() menuItem: any;
  @Input() child = false;

  @Input()
  private isCollapsed = false;

  @Output() itemHover = new EventEmitter<any>();
  @Output() toggleSubMenu = new EventEmitter<any>();


  public onHoverItem($event): void {
    this.itemHover.emit($event);
  }

  public onToggleSubMenu($event, item): boolean {
    $event.item = item;
    this.toggleSubMenu.emit($event);
    const ulTag = $($event.target.parentNode.parentNode).children('ul');
    return false;
  }

  ngAfterViewInit() {
  }
}
