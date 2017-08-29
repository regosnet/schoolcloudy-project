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

  constructor(private _scclMsgCenterService: ScclMsgCenterService) {
    this.notifications = this._scclMsgCenterService.getNotifications();
    this.messages = this._scclMsgCenterService.getMessages();
  }

}
