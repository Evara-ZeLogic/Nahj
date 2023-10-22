import { Component, Input, OnInit } from '@angular/core';
import { GeneralService } from 'app/shared/services/general.service';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-reviews',
  templateUrl: './reviews.component.html',
  styleUrls: ['./reviews.component.scss'],
})
export class ReviewsComponent implements OnInit {
  testimonials = [];
  constructor(private generalService: GeneralService) {}

  @Input() lang: string;

  customOptions: OwlOptions = {
    loop: true,
    items: 6,
    autoWidth: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    dots: true,
    skip_validateItems: true,
    lazyLoad: true,
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
        items: 2,
      },
      940: {
        items: 2,
      },
    },
    nav: true,
  };

  ngOnInit(): void {
    this.getTestimonials();
  }

  getTestimonials(): void {
    this.generalService.getTestimonials(100).subscribe({
      complete: () => {},
      error: (err) => {
        console.error(err);
      },
      next: (data) => {
        this.testimonials = data['data'];
      },
    });
  }
}
