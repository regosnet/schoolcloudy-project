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
    public actions: Array<Object>;
    public msgCenter: Array<Object>;

  constructor(private _scclMsgCenterService: ScclMsgCenterService) {
    this.notifications = this._scclMsgCenterService.getNotifications();
    this.messages = this._scclMsgCenterService.getMessages();
    this.actions = this.msgCenterActions;
    this.msgCenter =
        [
         {class: 'ion-earth', data: this.notifications},
         {class: 'fa fa-commenting', data: this.messages}
         ];
  }

  public  msgCenterActions = [
                                {
                                    title: 'sccl.menu.header.content_top.notifications',
                                    path: '/administrator/notifications',
                                    bottomMsg: 'sccl.menu.header.content_top.see_all_notif',
                                    class: 'notification-menu'
                                },
                                {
                                    title: 'sccl.menu.header.content_top.messages',
                                    path: '/administrator/messages',
                                    settings: '/administrator/settings',
                                    bottomMsg: 'sccl.menu.header.content_top.see_all_msgs',
                                    class: 'message-menu'
                                }
                             ];

}



/*
{
             msgCenter: {
                 title: 'Notifications',
                 path: '/administrator/messages',
                 msg: 'See All Notifications'
             },
             readAll: {
                 title: 'Mark All Read',
             },
             settings: {
                 title: 'sccl.menu.left_side_bar.settings',
                 path: '/administrator/settings'
             }
         },
         {
             msgCenter: {
                 title: 'Messages',
                 path: '/administrator/messages',
                 msg: 'See All Messages'
             },
             readAll: {
                 title: 'Mark All Read',
             },
             settings: {
                 title: 'sccl.menu.left_side_bar.settings',
                 path: '/administrator/settings'
             }
         }
*/
