import { ContentComponent } from './components/content/content.component';
import { BrandComponent } from './components/brand/brand.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommunicationComponent } from './components/communication/communication.component';
import { ServicesComponent } from './components/services/services.component';
import { DesignComponent } from './components/design/design.component';
import { TechnologyComponent } from './components/technology/technology.component';
import { MediaComponent } from './components/media/media.component';
import { EventComponent } from './components/event/event.component';
import { ReportingComponent } from './components/reporting/reporting.component';

const routes: Routes = [
  {
    path: '',
    component: ServicesComponent,
    children: [
      {
        path: '',
        redirectTo: 'details/:id',
        pathMatch: 'full',
      },
      {
        path: 'details/:id',
        component: CommunicationComponent,
      },
      // {
      //   path: 'brands',
      //   component: BrandComponent,
      // },
      // {
      //   path: 'content',
      //   component: ContentComponent,
      // },
      // {
      //   path: 'design',
      //   component: DesignComponent,
      // },
      // {
      //   path: 'technology',
      //   component: TechnologyComponent,
      // },
      // {
      //   path: 'media',
      //   component: MediaComponent,
      // },
      // {
      //   path: 'events',
      //   component: EventComponent,
      // },
      // {
      //   path: 'reporting',
      //   component: ReportingComponent,
      // },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ServicesRoutingModule {}
