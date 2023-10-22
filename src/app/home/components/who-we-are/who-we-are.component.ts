import { Component, Input, OnInit } from '@angular/core';
import { GeneralService } from 'app/shared/services/general.service';

@Component({
  selector: 'app-who-we-are',
  templateUrl: './who-we-are.component.html',
  styleUrls: ['./who-we-are.component.scss'],
})
export class WhoWeAreComponent implements OnInit {
  // @Input() lang: string;
  lang: string = 'en';

  selectLang(event: string) {
    this.lang = event;
  }

  settings = {} as any;
  constructor(private generalService: GeneralService) {}

  ngOnInit(): void {
    window.scrollTo(0, 0);
    this.getSettings();
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
