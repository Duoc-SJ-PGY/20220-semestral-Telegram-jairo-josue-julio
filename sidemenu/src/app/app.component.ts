import { InvitarAmigosPage } from './invitar-amigos/invitar-amigos.page';
import { Component } from '@angular/core';
import {HttpClient} from '@angular/common/http';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Perfil', url: 'perfil', icon:'person-circle'},
    { title: 'Nuevo grupo', url: 'nuevo-grupo', icon:'people'},
    { title: 'Contacto', url: 'contacto', icon: 'person' },
    { title: 'Llamadas', url: 'llamadas', icon: 'call' },
    { title: 'Persona cerca', url: 'personacerca', icon: 'person-circle' },
    { title: 'Mensajes guardados', url: 'mensajes-guardados', icon: 'bookmark' },
    { title: 'Ajustes', url: 'ajustes', icon: 'settings' },
  ];
  public appPages1 = [
    { title: 'Invitar amigos', url: 'invitar-amigos', icon: 'person-add' },
    { title: 'Iniciar sesion', url: 'login', icon: 'chevron-forward-circle' },
  ];

  constructor(private api: HttpClient) {
    this.api.get('');

  }
}
