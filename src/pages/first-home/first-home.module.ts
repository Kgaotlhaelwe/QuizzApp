import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { FirstHomePage } from './first-home';

@NgModule({
  declarations: [
    FirstHomePage,
  ],
  imports: [
    IonicPageModule.forChild(FirstHomePage),
  ],
})
export class FirstHomePageModule {}
