import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DispositivoPage } from './dispositivos.page';
import { DispositivoPageRoutingModule } from './dispositivos-routing.module';

import { SensorPageModule } from '../sensor/sensor.module';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DispositivoPageRoutingModule,
    SensorPageModule
  ],
  declarations: [DispositivoPage]
})
export class DispositivoPageModule {}
