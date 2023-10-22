import { TranslateService } from '@ngx-translate/core';
import { Component, OnInit } from '@angular/core';
import { GeneralService } from 'app/shared/services/general.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-communication',
  templateUrl: './communication.component.html',
  styleUrls: ['./communication.component.scss'],
})
export class CommunicationComponent implements OnInit {
  service = {} as any;
  constructor(
    public translate: TranslateService,
    private generalService: GeneralService,
    private route: ActivatedRoute
  ) {
    this.route.params.subscribe((params) => {
      this.getServiceBySlug(params['id']);
    });
  }

  ngOnInit(): void {
    window.scrollTo(0, 0);
  }

  getServiceBySlug(slug) {
    this.generalService.getService(slug).subscribe({
      complete: () => {},
      error: (err) => {
        console.error(err);
      },
      next: (data) => {
        this.service = data['data'];
      },
    });
  }
}
