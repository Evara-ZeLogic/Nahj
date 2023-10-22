import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule, registerLocaleData } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import localeAr from '@angular/common/locales/ar';
import localeEn from '@angular/common/locales/en';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { HttpLoaderFactory } from 'app/app.module';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderWhiteComponent } from './components/header-white/header-white.component';
import { FormsModule } from '@angular/forms';

registerLocaleData(localeAr);
registerLocaleData(localeEn);

@NgModule({
  declarations: [HeaderComponent, FooterComponent, HeaderWhiteComponent],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    HttpClientModule,
    TranslateModule.forRoot({
      defaultLanguage: 'en',
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient],
      },
    }),
  ],
  exports: [HeaderComponent, FooterComponent, HeaderWhiteComponent],
})
export class SharedModule {}
