import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage} from '../pages/home/home';
import {FirstHomePage} from  '../pages/first-home/first-home' ;
import {SciencePage} from '../pages/science/science';
import {SoccerPage} from '../pages/soccer/soccer';
import {FactsPage} from '../pages/facts/facts';
import {CoverPage} from '../pages/cover/cover' ;
@NgModule({
  declarations: [
    MyApp,
    HomePage,FirstHomePage,SciencePage,SoccerPage,FactsPage,CoverPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,FirstHomePage,SciencePage,SoccerPage,FactsPage,CoverPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
