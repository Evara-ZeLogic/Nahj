import { Component, Input, OnInit } from '@angular/core';
import { GeneralService } from 'app/shared/services/general.service';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.scss'],
})
export class HeroComponent implements OnInit {
  @Input() lang: string;
  sliders = [];
  settings = {} as any;
  customOptions: OwlOptions = {
    // loop: true,
    items: 1,
    autoWidth: false,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    dots: false,
    skip_validateItems: true,
    lazyLoad: false,
    autoplay: true,
    autoplayTimeout: 6000,
    nav: false,
  };
  constructor(private generalService: GeneralService) {}

  ngOnInit(): void {
    this.getSliders();
    this.getSettings();
  }

  getSliders(): void {
    this.generalService.getSliders().subscribe({
      complete: () => {},
      error: (err) => {
        console.error(err);
      },
      next: (data) => {
        this.sliders = data['data'];
        console.log(this.sliders);
        
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
