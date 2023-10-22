import { Component, Input, OnInit } from '@angular/core';
import { GeneralService } from 'app/shared/services/general.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],
})
export class AboutComponent implements OnInit {
  @Input() lang: string;
  settings = {} as any;
  constructor(private generalService: GeneralService) {
    generalService.changeEmitted$.subscribe((data) => {
      this.settings.newAbout = data.about.ar.substring(0, 200);
      this.settings.newAboutEn = data.about.en.substring(0, 200);
    });
  }

  ngOnInit(): void {}
}
