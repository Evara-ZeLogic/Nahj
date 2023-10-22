import { SharedModule } from './../shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule, registerLocaleData } from '@angular/common';

import { ServicesRoutingModule } from './services-routing.module';
import { CommunicationComponent } from './components/communication/communication.component';
import { BrandComponent } from './components/brand/brand.component';
import { ContentComponent } from './components/content/content.component';
import { ServicesComponent } from './components/services/services.component';
import { DesignComponent } from './components/design/design.component';
import { TechnologyComponent } from './components/technology/technology.component';
import { MediaComponent } from './components/media/media.component';
import { EventComponent } from './components/event/event.component';
import { ReportingComponent } from './components/reporting/reporting.component';
import localeAr from '@angular/common/locales/ar';
import localeEn from '@angular/common/locales/en';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { HttpClient } from '@angular/common/http';
import { HttpLoaderFactory } from 'app/app.module';

registerLocaleData(localeAr);
registerLocaleData(localeEn);

@NgModule({
  declarations: [
    CommunicationComponent,
    BrandComponent,
    ContentComponent,
    ServicesComponent,
    DesignComponent,
    TechnologyComponent,
    MediaComponent,
    EventComponent,
    ReportingComponent
  ],
  imports: [
    CommonModule,
    ServicesRoutingModule,
    SharedModule,
    TranslateModule.forRoot({
      defaultLanguage: 'en',
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient],
      },
    }),
  ]
})
export class ServicesModule { }
