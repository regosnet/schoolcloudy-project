import {Directive, Input, Output, ElementRef, EventEmitter, OnChanges, HostListener} from '@angular/core';
import 'jquery-slimscroll';

@Directive({
  selector: '[scclSlimScroll]'
})
export class ScclSlimScrollDirective implements OnChanges {

  @Input() public scclSlimScrollOptions: Object;

  constructor(private _elementRef: ElementRef) {
  }

  ngOnChanges(changes) {
    this._scroll();
  }

  private _scroll() {
    this._destroy();
    this._init();
  }

  private _init() {
     jQuery(this._elementRef.nativeElement).slimScroll(this.scclSlimScrollOptions);
  }

  private _destroy() {
    jQuery(this._elementRef.nativeElement).slimScroll({ destroy: true });
  }
}
