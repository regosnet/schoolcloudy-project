import { Component, AfterViewInit } from '@angular/core';
import { ScclPreloaderService } from './scclService/scclPreloaderService/scclPreloader';

@Component({
  selector: 'sccl-main',
  templateUrl: './scclMain.html',
  styleUrls: ['./scclMain.scss']
})
export class ScclMainComponent implements AfterViewInit {
  title = 'app';

  constructor(private _scclSpinner: ScclPreloaderService) {
  }

  public ngAfterViewInit(): void {
      ScclPreloaderService.load().then((values) => {
          this._scclSpinner.hide();
      });
  }
}
