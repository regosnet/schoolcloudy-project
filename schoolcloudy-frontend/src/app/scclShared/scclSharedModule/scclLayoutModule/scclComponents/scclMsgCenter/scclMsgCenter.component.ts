import {Component} from '@angular/core';

import {ScclMsgCenterService} from './scclMsgCenter.service';

@Component({
  selector: 'sccl-msg-center',
  providers: [ScclMsgCenterService],
  styleUrls: ['./scclMsgCenter.scss'],
  templateUrl: './scclMsgCenter.html'
})
export class ScclMsgCenterComponent {

  public notifications: Array<Object>;
  public messages: Array<Object>;
  public msgCenter: Array<Object>;

  constructor(private _scclMsgCenterService: ScclMsgCenterService) {
    this.notifications = this._scclMsgCenterService.getNotifications();
    this.messages = this._scclMsgCenterService.getMessages();
    this.msgCenter =
        [
         {class: 'ion-earth', data: this.notifications},
         {class: 'fa fa-commenting', data: this.messages}
         ];
  }

}
