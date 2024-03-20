import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

import emailjs, { EmailJSResponseStatus } from '@emailjs/browser';
import { GeneralService } from 'app/shared/services/general.service';
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
})
export class ContactComponent implements OnInit {
  @Input() lang: string;
  serviceID: string = 'service_1ujcbmp';
  publicKey: string = '4UAiCTy0ZG7kU1qKI';
  templateID: string = 'template_7cxyom4';
  contactForm: FormGroup = new FormGroup({
    name: new FormControl('', Validators.required),
    email: new FormControl('', [Validators.required, Validators.email]),
    phone: new FormControl(''),
    message: new FormControl('', Validators.required),
    subject: new FormControl('', Validators.required),
  });
  settings = {} as any;
  constructor(
    private toastrService: ToastrService,
    private generalService: GeneralService
  ) {
    generalService.changeEmitted$.subscribe((data) => {
      this.settings = data;
    });
  }

  ngOnInit(): void { 
    initMap()
  }

  // sendEmail(form) {
  //   emailjs
  //     .sendForm(
  //       this.serviceID,
  //       this.templateID,
  //       form.target as HTMLFormElement,
  //       this.publicKey
  //     )
  //     .then(
  //       (result: EmailJSResponseStatus) => {
  //         if (result.text) {
  //           if (this.lang === 'en') {
  //             this.toastrService.success(
  //               'Thank you for your message !',
  //               'Success'
  //             );
  //           } else {
  //             this.toastrService.success('شكرا لك على مرسالتنا', 'نجاح');
  //           }
  //           this.contactForm.reset();
  //         }
  //       },
  //       (error) => {
  //         console.log(error.text);
  //       }
  //     );
  // }

  sendEmail() {
    this.generalService.sendMessage(this.contactForm.value).subscribe({
      complete: () => { },
      error: (err) => {
        console.error(err);
      },
      next: () => {
        if (this.lang === 'en') {
          this.toastrService.success('Thank you for your message !', 'Success');
        } else {
          this.toastrService.success('شكرا لك على مرسالتنا', 'نجاح');
        }
        this.contactForm.reset();
      },
    });
  }

  center: google.maps.LatLngLiteral = { lat: 24, lng: 12 };
  zoom = 4;
  display: google.maps.LatLngLiteral;

  moveMap(event: google.maps.MapMouseEvent) {
    this.center = (event.latLng.toJSON());
  }

  move(event: google.maps.MapMouseEvent) {
    this.display = event.latLng.toJSON();
  }
}


let map: google.maps.Map;
async function initMap(): Promise<void> {
  const { Map } = await google.maps.importLibrary("maps") as google.maps.MapsLibrary;
  map = new Map(document.getElementById("map") as HTMLElement, {
    center: { lat: -34.397, lng: 150.644 },
    zoom: 8,
  });
}