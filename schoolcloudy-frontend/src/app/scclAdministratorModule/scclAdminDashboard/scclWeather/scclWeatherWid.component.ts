import { Component } from '@angular/core';
import { NbThemeService } from '@nebular/theme';
import { NbJSThemeOptions } from '@nebular/theme/services/js-themes/theme.options';

@Component({
  selector: 'sccl-weather-wid',
  templateUrl: './scclWeatherWid.html',
  styleUrls: ['./scclWeatherWid.scss'],
})

export class ScclWeatherWidComponent {
    constructor(private themeService: NbThemeService) {
        this.themeService.getJsTheme()
        .subscribe((theme: NbJSThemeOptions) => console.log(theme));
    }
}
