import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'environments/environment';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class GeneralService {
  private emitChangeSource = new Subject<any>();
  changeEmitted$ = this.emitChangeSource.asObservable();

  private emitChangeService = new Subject<any>();
  serviceEmitted$ = this.emitChangeService.asObservable();
  constructor(private http: HttpClient) {}

  emitChange(change: any) {
    this.emitChangeSource.next(change);
  }

  emitServices(change: any) {
    this.emitChangeService.next(change);
  }

  getSliders() {
    const URL = `${environment.BASE_URL}sliders`;
    return this.http.get(URL);
  }

  getSettings() {
    const URL = `${environment.BASE_URL}setting`;
    return this.http.get(URL);
  }

  getPartners(limit) {
    const URL = `${environment.BASE_URL}partners`;
    return this.http.get(URL, { params: { limit } });
  }

  getTestimonials(limit) {
    const URL = `${environment.BASE_URL}testimonials`;
    return this.http.get(URL, { params: { limit } });
  }

  getTeam(limit) {
    const URL = `${environment.BASE_URL}employees`;
    return this.http.get(URL, { params: { limit } });
  }

  sendMessage(sentData) {
    const URL = `${environment.BASE_URL}messages`;
    return this.http.post(URL, sentData);
  }

  getServices(limit) {
    const URL = `${environment.BASE_URL}services`;
    return this.http.get(URL, { params: { limit } });
  }

  getService(slug) {
    const URL = `${environment.BASE_URL}services/${slug}`;
    return this.http.get(URL);
  }
}
