import { HomeComponent } from './home/home.component';
import { PublicComponent } from './public.component';
import { RouterModule, Routes, Router } from '@angular/router';


const publicRoutes: Routes = [
  {
    path: '',
    component: PublicComponent,
    children: [
      {path: '', component: HomeComponent, data: {titulo : 'Home' } },
    ]
  }
];

export const PUBLIC_ROUTES = RouterModule.forChild(publicRoutes);