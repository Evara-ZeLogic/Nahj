import { Component, Input, OnInit } from '@angular/core';
import { GeneralService } from 'app/shared/services/general.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.scss']
})
export class ServicesComponent implements OnInit {

  @Input() lang: string;
  serviceData: any;
  private serviceSubscription: Subscription;

  constructor( private generalService: GeneralService) { }

  ngOnInit(): void {
   
  }


}
