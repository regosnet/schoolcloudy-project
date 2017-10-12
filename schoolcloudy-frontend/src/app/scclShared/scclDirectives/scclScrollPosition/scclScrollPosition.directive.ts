import {Directive, Input, Output, EventEmitter, HostListener, OnInit, ElementRef} from '@angular/core';

@Directive({
  selector: '[scclScrollPosition]'
})
export class ScclScrollPositionDirective implements OnInit {

  @Input() public maxHeight: number;
  @Output() public scrollChange: EventEmitter<boolean> = new EventEmitter<boolean>();

  private _isScrolled: boolean;

  constructor(private _elementRef: ElementRef) {
  }

  public ngOnInit(): void {
    this.onWindowScroll();
  }

  @HostListener('window:scroll')
  onWindowScroll(): void {
    const isScrolled = window.scrollY > this.maxHeight;
    if (isScrolled !== this._isScrolled) {
      this._isScrolled = isScrolled;
      this.scrollChange.emit(isScrolled);
    }
  }

  @HostListener('mousewheel')
  onTableScroll(): void {
      let scclTable = $('table');
      let tableHeadTop = scclTable.offset().top;
      
      if (Math.floor(tableHeadTop) === 149) {
       
      }
  }
}
