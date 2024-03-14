import { Component, Input, OnInit } from '@angular/core';
import { GeneralService } from 'app/shared/services/general.service';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.scss'],
})
export class TeamComponent implements OnInit {
  @Input() lang: string;
  team = [];
  constructor(private generalService: GeneralService) {}

  customOptions: OwlOptions = {
    // loop: true,
    items: 6,
    autoWidth: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    dots: true,
    skip_validateItems: true,
    lazyLoad: true,
    autoplay: true,
    autoplayTimeout: 2000,
    responsiveRefreshRate: 200,
    navSpeed: 700,
    navText: [
      '<i class="fa-solid fa-chevron-left"></i>',
      '<i class="fa-solid fa-chevron-right"></i>',
    ],
    responsive: {
      0: {
        items: 1,
      },
      400: {
        items: 1,
      },
      740: {
        items: 3,
      },
      940: {
        items: 6,
      },
    },
    nav: true,
  };
  ngOnInit(): void {
    this.getTeam();
  }

  getTeam(): void {
    this.generalService.getTeam(100).subscribe({
      complete: () => {},
      error: (err) => {
        console.error(err);
      },
      next: (data) => {
        this.team = data['data'];
      },
    });
  }
}
