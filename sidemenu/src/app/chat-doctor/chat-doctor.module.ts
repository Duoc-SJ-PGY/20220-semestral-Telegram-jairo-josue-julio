import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ChatDoctorPageRoutingModule } from './chat-doctor-routing.module';

import { ChatDoctorPage } from './chat-doctor.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ChatDoctorPageRoutingModule
  ],
  declarations: [ChatDoctorPage]
})
export class ChatDoctorPageModule {}
