import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StartPageComponent } from './container/start-page/start-page.component';
import {WelcomeRoutingModule} from './welcome-routing.module';

@NgModule({
  declarations: [StartPageComponent],
  imports: [
    CommonModule,
    WelcomeRoutingModule
  ]
})
export class  WelcomeModule { }
