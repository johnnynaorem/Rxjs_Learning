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
  {
    path: 'interval',
    pathMatch: 'full',
    loadComponent: () => {
      return import('./components/interval/interval.component').then(
        (m) => m.IntervalComponent
      );
    },
  },
  {
    path: 'of-from',
    pathMatch: 'full',
    loadComponent: () => {
      return import('./components/of-from/of-from.component').then(
        (m) => m.OfFromComponent
      );
    },
  },
  {
    path: 'to-array',
    pathMatch: 'full',
    loadComponent: () => {
      return import('./components/to-array/to-array.component').then(
        (m) => m.ToArrayComponent
      );
    },
  },
  {
    path: 'custom-obsevable',
    pathMatch: 'full',
    loadComponent: () => {
      return import(
        './components/custom-observable/custom-observable.component'
      ).then((m) => m.CustomObservableComponent);
    },
  },
  {
    path: 'map-operator',
    pathMatch: 'full',
    loadComponent: () => {
      return import('./components/map-operator/map-operator.component').then(
        (m) => m.MapOperatorComponent
      );
    },
  },
  {
    path: 'filter-operator',
    pathMatch: 'full',
    loadComponent: () => {
      return import(
        './components/filter-operator/filter-operator.component'
      ).then((m) => m.FilterOperatorComponent);
    },
  },
  {
    path: 'tap-operator',
    pathMatch: 'full',
    loadComponent: () => {
      return import('./components/tap-operator/tap-operator.component').then(
        (m) => m.TapOperatorComponent
      );
    },
  },
  {
    path: 'take-operator',
    pathMatch: 'full',
    loadComponent: () => {
      return import('./components/take-operator/take-operator.component').then(
        (m) => m.TakeOperatorComponent
      );
    },
  },
];
