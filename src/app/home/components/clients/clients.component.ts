import { Component, Input, OnInit } from '@angular/core';
import { GeneralService } from 'app/shared/services/general.service';

@Component({
  selector: 'app-clients',
  templateUrl: './clients.component.html',
  styleUrls: ['./clients.component.scss'],
})
export class ClientsComponent implements OnInit {
  @Input() lang: string;
  partners = [];
  constructor(private generalService: GeneralService) {}

  ngOnInit(): void {
    this.getPartners();
  }

  getPartners(): void {
    this.generalService.getPartners(100).subscribe({
      complete: () => {},
      error: (err) => {
        console.error(err);
      },
      next: (data) => {
        this.partners = data['data'];
      },
    });
  }
}
