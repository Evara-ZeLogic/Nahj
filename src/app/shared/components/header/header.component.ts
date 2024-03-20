import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { GeneralService } from 'app/shared/services/general.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  settings = {} as any;
  services = [];
  showMenu: boolean = false;
  showSubMenu: boolean = false;
  constructor(
    private translate: TranslateService,
    private generalService: GeneralService
  ) {
    generalService.changeEmitted$.subscribe((data) => {
      this.settings = data;
    });
  }

  @Output() getCurrentLang = new EventEmitter();

  lang: string = 'en';

  ngOnInit(): void {
    this.getServices();
    if (localStorage.getItem('lang')) {
      this.lang = localStorage.getItem('lang');
      this.translate.use(localStorage.getItem('lang'));
      this.getCurrentLang.emit(this.lang);
    }
    window.addEventListener('scroll', (e) => {
      const navbar: any = document.querySelector('.navbar')
      if (window.pageYOffset > 50) {
        navbar.style.top = 0
      } else {
        navbar.style.top = '48px'
      }

    })
  }
  changeLanguage(lang: any) {
    debugger
    if (lang == 'ar') {
      this.translate.use('ar');
      this.lang = 'ar';
    } else {
      this.translate.use('en');
      this.lang = 'en';
    }
    localStorage.setItem('lang', this.lang);
    this.getCurrentLang.emit(this.lang);
  }

  getServices(): void {
    this.generalService.getServices(100).subscribe({
      complete: () => { },
      error: (err) => {
        console.error(err);
      },
      next: (data) => {
        this.services = data['data'];
        this.generalService.emitServices(data);
      },
    });
  }
}
