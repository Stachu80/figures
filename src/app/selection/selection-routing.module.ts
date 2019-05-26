import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {SelectionPageComponent} from './selection-page/selection-page.component';

const routes: Routes = [
  {
    path: '',
    component: SelectionPageComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SelectionRoutingModule {
}
