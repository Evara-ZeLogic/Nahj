import { Component, Input, OnInit } from '@angular/core';
import { GeneralService } from 'app/shared/services/general.service';

@Component({
  selector: 'app-communication',
  templateUrl: './communication.component.html',
  styleUrls: ['./communication.component.scss'],
})
export class CommunicationComponent implements OnInit {
  services = [];
  @Input() lang: string;
  constructor(private generalService: GeneralService) {
    generalService.serviceEmitted$.subscribe((data) => {
      this.services = data['data'];
    });
  }

  ngOnInit(): void {}
}
