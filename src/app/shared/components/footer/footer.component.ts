import { Component, Input, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { GeneralService } from 'app/shared/services/general.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
})
export class FooterComponent implements OnInit {
  settings = {} as any;
  constructor(
    private translate: TranslateService,
    private generalService: GeneralService
  ) {
    this.generalService.changeEmitted$.subscribe((data) => {
      this.settings = data;
      this.settings.newAbout = data.about.ar.substring(0, 200);
      this.settings.newAboutEn = data.about.en.substring(0, 200);
    });
  }

  @Input() lang: string;

  ngOnInit(): void {}
}
