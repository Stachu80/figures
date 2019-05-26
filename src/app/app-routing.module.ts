import {NgModule} from '@angular/core';
import {Routes, RouterModule, PreloadAllModules} from '@angular/router';

const routes: Routes = [

  {
    path: 'welcome',
    loadChildren: './welcome/welcome.module#WelcomeModule',
  },
  {

    path: 'selection',
    loadChildren: './selection/selection.module#SelectionModule',
  },
  {
    path: '',
    redirectTo: '/welcome',
    pathMatch: 'full'
  },
];

@NgModule({
  imports: [ RouterModule.forRoot(routes, {
    preloadingStrategy: PreloadAllModules,
  })],

  exports: [RouterModule]
})
export class AppRoutingModule {
}
