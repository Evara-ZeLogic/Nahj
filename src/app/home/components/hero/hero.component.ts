import { Component, Input, OnInit } from '@angular/core';
import { GeneralService } from 'app/shared/services/general.service';
import * as $ from 'jquery';

// declare var $: any
@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.scss'],
})
export class HeroComponent implements OnInit {
  @Input() lang: string;
  sliders = [];
  settings = {} as any;
  constructor(private generalService: GeneralService) {}

  ngOnInit(): void {
    // (<any>$('.mySlider')).slick({
    //   infinite: true,
    //   slidesToShow: 3,
    //   slidesToScroll: 3
    // });
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
