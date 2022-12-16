import { NuevoGrupoPageRoutingModule } from './nuevo-grupo/nuevo-grupo-routing.module';
import { NuevoGrupoPage } from './nuevo-grupo/nuevo-grupo.page';
import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
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
    path: 'chats',
    loadChildren: () => import('./chats/chats.module').then( m => m.ChatsPageModule)
  },
  {
    path: 'perfil',
    loadChildren: () => import('./perfil/perfil.module').then( m => m.PerfilPageModule)
  },
  {
    path: 'dashboard',
    loadChildren: () => import('./dashboard/dashboard.module').then( m => m.DashboardPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'registro',
    loadChildren: () => import('./registro/registro.module').then( m => m.RegistroPageModule)
  },  {
    path: 'politicas',
    loadChildren: () => import('./politicas/politicas.module').then( m => m.PoliticasPageModule)
  },
  {
    path: 'coming-soon',
    loadChildren: () => import('./coming-soon/coming-soon.module').then( m => m.ComingSoonPageModule)
  },
  {
    path: 'privacidad',
    loadChildren: () => import('./privacidad/privacidad.module').then( m => m.PrivacidadPageModule)
  },
  {
    path: 'idioma',
    loadChildren: () => import('./idioma/idioma.module').then( m => m.IdiomaPageModule)
  },
  {
    path: 'chat-eren',
    loadChildren: () => import('./chat-eren/chat-eren.module').then( m => m.ChatErenPageModule)
  },
  {
    path: 'chat-donomar',
    loadChildren: () => import('./chat-donomar/chat-donomar.module').then( m => m.ChatDonomarPageModule)
  },
  {
    path: 'chat-doctor',
    loadChildren: () => import('./chat-doctor/chat-doctor.module').then( m => m.ChatDoctorPageModule)
  },

  



];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
