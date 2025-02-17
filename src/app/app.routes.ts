import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'from-event',
    pathMatch: 'full',
    loadComponent: () => {
      return import('./components/from-event/from-event.component').then(
        (m) => m.FromEventComponent
      );
    },
  },
];
