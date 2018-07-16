import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';

import { CoverPage} from '../pages/cover/cover';

import {SoccerPage} from '../pages/soccer/soccer';

import {FactsPage} from '../pages/facts/facts';
import {SciencePage} from '../pages/science/science';
@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage:any = CoverPage;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });
  }
}

