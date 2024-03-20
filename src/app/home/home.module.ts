import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from './../shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule, registerLocaleData } from '@angular/common';
import localeAr from '@angular/common/locales/ar';
import localeEn from '@angular/common/locales/en';
import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { WhoWeAreComponent } from './components/who-we-are/who-we-are.component';
import { HeroComponent } from './components/hero/hero.component';
import { ContactComponent } from './components/contact/contact.component';
import { HttpClient } from '@angular/common/http';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { HttpLoaderFactory } from 'app/app.module';
import { TeamComponent } from './components/team/team.component';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { TimelineComponent } from './components/timeline/timeline.component';
import { ClientsComponent } from './components/clients/clients.component';
import { ReviewsComponent } from './components/reviews/reviews.component';
import { ServicesComponent } from './components/services/services.component';
import { CommunicationComponent } from './components/services/components/communication/communication.component';
import { BrandComponent } from './components/services/components/brand/brand.component';
import { TechnologyComponent } from './components/services/components/technology/technology.component';
import { ContentComponent } from './components/services/components/content/content.component';
import { DesignComponent } from './components/services/components/design/design.component';
import { MediaComponent } from './components/services/components/media/media.component';
import { EventComponent } from './components/services/components/event/event.component';
import { ReportingComponent } from './components/services/components/reporting/reporting.component';
import { GoogleMap, GoogleMapsModule } from '@angular/google-maps';

registerLocaleData(localeAr);
registerLocaleData(localeEn);
@NgModule({
  declarations: [
    HomeComponent,
    AboutComponent,
    WhoWeAreComponent,
    HeroComponent,
    ContactComponent,
    TeamComponent,
    TimelineComponent,
    ClientsComponent,
    ReviewsComponent,
    ServicesComponent,
    CommunicationComponent,
    BrandComponent,
    TechnologyComponent,
    ContentComponent,
    DesignComponent,
    MediaComponent,
    EventComponent,
    ReportingComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule,
    CarouselModule,
    GoogleMapsModule,
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
export class HomeModule { }
