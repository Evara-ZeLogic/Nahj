import { Component, Input, OnInit } from '@angular/core';
import { GeneralService } from 'app/shared/services/general.service';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.scss']
})
export class ServicesComponent implements OnInit {

  @Input() lang: string;

  services = [];
  constructor(private generalService: GeneralService) {
    generalService.serviceEmitted$.subscribe((data) => {
      this.services = data['data'];
    });
  }

  ngOnInit(): void {
  }

}
