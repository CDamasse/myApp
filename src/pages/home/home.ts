import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {MesobjetsPage} from "../mesobjets/mesobjets";
import {CartePage} from "../carte/carte";
import {NotificationsPage} from "../notifications/notifications";
import {SettingsPage} from "../settings/settings";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {
  }

  pushPageObjects(){
    this.navCtrl.push(MesobjetsPage, {
    });
  }

  pushPageMap(){
    this.navCtrl.push(CartePage);
  }

  pushPageNotif(){
    this.navCtrl.push(NotificationsPage);
  }

  pushPageSettings(){
    this.navCtrl.push(SettingsPage);
  }
}
