import { Component, Input } from '@angular/core';

@Component({
    selector: 'sccl-dropdown-menu',
    template: `
            <i class="ion-arrow-up-b"></i>
            <li class="dropdown-item" *ngFor="let item of dropDownMenuItems">
                <a href [routerLink]="item.route">
                    <i class="{{item.icon}}"></i>{{item.title}}
                    <span *ngIf="item.badge.value > 0" class="badge badge-info">{{item.badge.value}}</span>
                </a>
            </li>
    `,
    styleUrls: ['./scclDropDownMenu.scss']
})
export class ScclDropDownMenuComponent {
    @Input()
    dropDownMenuItems: any;
}
