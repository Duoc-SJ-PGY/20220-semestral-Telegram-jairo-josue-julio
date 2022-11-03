import { Injectable } from '@angular/core';
import { Geolocation } from '@ionic-native/geolocation/ngx';

@Injectable({
  providedIn: 'root'
})
export class GpsService {

  constructor(private gps : Geolocation) { }

  async obtenerPosicion(){
    await this.gps.getCurrentPosition().then((ubicacion) => { 
      console.log({ubicacion});

    }); 

  }
}
