import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ChatErenPageRoutingModule } from './chat-eren-routing.module';

import { ChatErenPage } from './chat-eren.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ChatErenPageRoutingModule
  ],
  declarations: [ChatErenPage]
})
export class ChatErenPageModule {}
