import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MesobjetsPage } from './mesobjets';

@NgModule({
  declarations: [
    MesobjetsPage,
  ],
  imports: [
    IonicPageModule.forChild(MesobjetsPage),
  ],
})
export class MesobjetsPageModule {}
