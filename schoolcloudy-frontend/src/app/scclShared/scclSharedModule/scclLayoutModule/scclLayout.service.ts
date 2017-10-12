import { Injectable } from '@angular/core';
import { scclLayoutSizes } from './scclLayout.constants';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

@Injectable()
export class ScclLayoutService {
    private width = new BehaviorSubject<number>(0);

    public windowResizer(dimension: number): void {
        let width: number;
        if ($(window).width() <= scclLayoutSizes.resWidthHideSidebar) {
            width = ($(window).width()  - dimension - 9);
        }else if ($(window).width() <= scclLayoutSizes.resWidthCollapseSidebar) {
            width = ($(window).width() - dimension - 69);
        }else {
            width = ($(window).width() - dimension - 199);
        }
        this.width.next(width);
    }

    public getWidth() {
        return this.width;
    }
}
