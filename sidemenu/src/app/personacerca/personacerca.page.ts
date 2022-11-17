import { Component, OnInit } from '@angular/core';
import { Geolocation, Geoposition } from '@ionic-native/geolocation/ngx';

@Component({
  selector: 'app-personacerca',
  templateUrl: './personacerca.page.html',
  styleUrls: ['./personacerca.page.scss'],
})
export class PersonacercaPage implements OnInit {

  constructor( public geolocation: Geolocation) { 
    this.getGeolocation();
   }

  lat: number;
  lon:number;
  total: string;

  getGeolocation(){
    this.geolocation.getCurrentPosition().then((geoposition: Geoposition) =>{
      this.lat = geoposition.coords.latitude;
      this.lon = geoposition.coords.longitude;

      let latSanjoaquin = -33.49972601464;
      let lonSanjoaquin = -70.6163849865586;

      this.total = this.calculateDistance(this.lon, lonSanjoaquin, this.lat, latSanjoaquin) + "KM";
    });
  }
  
  calculateDistance(lon1, lon2, lat1, lat2){
    let p = 0.017453292519943295;
    let c = Math.cos;
    let a = 0.5 - c((lat1-lat2) * p) / 2 + c(lat2 * p) *c((lat1) * p) * (1 - c(((lon1- lon2) * p))) / 2;
    let dis = (12742 * Math.asin(Math.sqrt(a)));
    return Math.trunc(dis);
}



  ngOnInit() {
  }

}
