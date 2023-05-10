import { NgModule } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  PreloadAllModules,
  RouterModule,
  Routes,
} from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'folder/inbox',
    pathMatch: 'full',
  },
  {
    path: 'folder',
    loadComponent: () => import('./folder/folder.component'),
    children: [
      {
        path: 'inbox',
        loadComponent: () => import('./inbox/inbox.component'),
        title: 'Inbox',
      },
      {
        path: ':id',
        loadComponent: () => import('./placeholder.component'),
        title: (route: ActivatedRouteSnapshot) => route.params['id'],
      },
    ],
  },
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
