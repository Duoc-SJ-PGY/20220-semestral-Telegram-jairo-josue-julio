import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ChatDonomarPageRoutingModule } from './chat-donomar-routing.module';

import { ChatDonomarPage } from './chat-donomar.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ChatDonomarPageRoutingModule
  ],
  declarations: [ChatDonomarPage]
})
export class ChatDonomarPageModule {}
