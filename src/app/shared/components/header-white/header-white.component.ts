import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { GeneralService } from 'app/shared/services/general.service';

@Component({
  selector: 'app-header-white',
  templateUrl: './header-white.component.html',
  styleUrls: ['./header-white.component.scss'],
})
export class HeaderWhiteComponent implements OnInit {
  settings = {} as any;
  services = [];
  constructor(
    private translate: TranslateService,
    private generalService: GeneralService
  ) {}

  @Output() getCurrentLang = new EventEmitter();

  lang: string = 'en';

  ngOnInit(): void {
    this.getSettings();
    this.getServices();
    if (localStorage.getItem('lang')) {
      this.lang = localStorage.getItem('lang');
      this.translate.use(localStorage.getItem('lang'));
      this.getCurrentLang.emit(this.lang);
    }
  }
  changeLanguage(event: any) {
    switch (event.value) {
      case 'en':
        this.translate.use('en');
        this.lang = 'en';
        break;
      case 'ar':
        this.translate.use('ar');
        this.lang = 'ar';
        break;
      default:
        break;
    }
    localStorage.setItem('lang', this.lang);
    this.getCurrentLang.emit(this.lang);
  }

  getServices(): void {
    this.generalService.getServices(100).subscribe({
      complete: () => {},
      error: (err) => {
        console.error(err);
      },
      next: (data) => {
        this.services = data['data'];
        this.generalService.emitServices(data);
      },
    });
  }

  getSettings(): void {
    this.generalService.getSettings().subscribe({
      complete: () => {},
      error: (err) => {
        console.error(err);
      },
      next: (data) => {
        this.settings = data;
        this.generalService.emitChange(data);
      },
    });
  }
}
