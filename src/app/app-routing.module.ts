import { WhoWeAreComponent } from './home/components/who-we-are/who-we-are.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then((m) => m.HomeModule),
  },
  {
    path: 'about',
    component: WhoWeAreComponent,
  },
  {
    path: 'services',
    loadChildren: () =>
      import('./services/services.module').then((m) => m.ServicesModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
