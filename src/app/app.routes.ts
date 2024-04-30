import { Routes } from '@angular/router';

export const routes: Routes = [

  {
    path: '',
    loadComponent: () => import('./w-tech/ejercicio-uno/ejercicio-uno.component')
  },

  {
    path: 'ejercicio-dos',
    loadComponent: () => import('./w-tech/ejercicio-dos/ejercicio-dos.component')
  }
];
