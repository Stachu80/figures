import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RootStoreModule} from './store/root-store.module';
import {HttpClientModule} from '@angular/common/http';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    HttpClientModule,
    RootStoreModule
  ]
})
export class CoreModule {
}
