import { Component, Input } from '@angular/core';

@Component({
  selector: 'sccl-msg-center-menu-item',
  templateUrl: './scclMsgCenterMenuItem.html'
})
export class ScclMsgCenterMenuItemComponent {

    @Input()
    public notifications: Array<Object>;
    public messages: Array<Object>;
}
