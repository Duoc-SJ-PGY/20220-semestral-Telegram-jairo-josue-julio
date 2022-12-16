import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ChatDonomarPage } from './chat-donomar.page';

const routes: Routes = [
  {
    path: '',
    component: ChatDonomarPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ChatDonomarPageRoutingModule {}
