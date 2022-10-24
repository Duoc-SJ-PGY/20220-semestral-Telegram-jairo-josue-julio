import { NuevoGrupoPageRoutingModule } from './nuevo-grupo/nuevo-grupo-routing.module';
import { NuevoGrupoPage } from './nuevo-grupo/nuevo-grupo.page';
import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'folder/Inbox',
    pathMatch: 'full'
  },
  {
    path: 'folder/:id',
    loadChildren: () => import('./folder/folder.module').then( m => m.FolderPageModule)
  },
  {
    path: 'nuevo-grupo',
    loadChildren: () => import('./nuevo-grupo/nuevo-grupo.module').then( m => m.NuevoGrupoPageModule)
  },
  {
    path: 'contacto',
    loadChildren: () => import('./contacto/contacto.module').then( m => m.ContactoPageModule)
  },
  {
    path: 'llamadas',
    loadChildren: () => import('./llamadas/llamadas.module').then( m => m.LlamadasPageModule)
  },
  {
    path: 'personacerca',
    loadChildren: () => import('./personacerca/personacerca.module').then( m => m.PersonacercaPageModule)
  },
  {
    path: 'mensajes-guardados',
    loadChildren: () => import('./mensajes-guardados/mensajes-guardados.module').then( m => m.MensajesGuardadosPageModule)
  },
  {
    path: 'ajustes',
    loadChildren: () => import('./perfil/perfil.module').then( m => m.PerfilPageModule)
  },
  {
    path: 'invitar-amigos',
    loadChildren: () => import('./invitar-amigos/invitar-amigos.module').then( m => m.InvitarAmigosPageModule)
  },
  {
    path: 'aprende-sobre-telegram',
    loadChildren: () => import('./aprende-sobre-telegram/aprende-sobre-telegram.module').then( m => m.AprendeSobreTelegramPageModule)
  },
  {
    path: 'chats',
    loadChildren: () => import('./chats/chats.module').then( m => m.ChatsPageModule)
  },
  {
    path: 'perfil',
    loadChildren: () => import('./perfil/perfil.module').then( m => m.PerfilPageModule)
  }

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
