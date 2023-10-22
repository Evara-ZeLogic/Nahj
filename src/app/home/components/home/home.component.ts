import { Component, ElementRef, HostListener, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  scrollingUp: boolean = false;
  lang: string = 'en';

  @HostListener('window:scroll', ['$event']) // for window scroll events
  onScroll() {
    let pos = window.pageYOffset;
    if (pos >= 1) {
      this.scrollingUp = true;
    } else {
      this.scrollingUp = false;
    }
  }

  @ViewChild('container') container: ElementRef<HTMLElement>;

  constructor(private activeRoute: ActivatedRoute) { }

  ngOnInit(): void {
    window.scrollTo(0, 0);
  }

  scrollDown(el: HTMLElement) {
    el.scrollIntoView({ behavior: 'smooth' })
  }

  scrollUp() {
    window.scrollTo(0, 0)
    window.scroll({ behavior: 'smooth' });
  }

  selectLang(event: string) {
    this.lang = event;
  }

  ngAfterViewInit(): void {
    this.activeRoute.params.subscribe(param => {
      if (param['section']) {
        const section = this.container.nativeElement.querySelector(`#${param['section']}`)
        section?.scrollIntoView()
      }
    })

  }

}
