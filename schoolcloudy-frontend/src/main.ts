import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';


import { environment } from './environments/environment';
import { ScclMainModule } from './app/scclMain.module';

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(ScclMainModule);
