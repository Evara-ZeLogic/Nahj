import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.scss']
})
export class ServicesComponent implements OnInit {

  @Input() lang: string;

  constructor() { }

  ngOnInit(): void {
  }

}
