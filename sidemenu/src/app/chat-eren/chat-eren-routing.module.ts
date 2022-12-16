import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ChatErenPage } from './chat-eren.page';

const routes: Routes = [
  {
    path: '',
    component: ChatErenPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ChatErenPageRoutingModule {}
