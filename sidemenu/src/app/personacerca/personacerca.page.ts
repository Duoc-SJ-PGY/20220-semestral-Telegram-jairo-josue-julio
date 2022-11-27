import { Component, OnInit } from '@angular/core';
import { Geolocation, Geoposition } from '@ionic-native/geolocation/ngx';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { map } from "rxjs/operators";

@Component({
  selector: 'app-personacerca',
  templateUrl: './personacerca.page.html',
  styleUrls: ['./personacerca.page.scss'],
})
export class PersonacercaPage implements OnInit {

  constructor( public geolocation: Geolocation, private activatedRoute: ActivatedRoute, private http: HttpClient) { 
    this.getGeolocation();
   }

  lat: number;
  lon:number;
  total: string;

  getGeolocation(){
    this.geolocation.getCurrentPosition().then((geoposition: Geoposition) =>{
      this.lat = geoposition.coords.latitude;
      this.lon = geoposition.coords.longitude;

      let latSanjoaquin = -33.59832742401395;
      let lonSanjoaquin = -70.57915683257822;

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



users: any = [];

activeTab = 'chats';

segmentChange(e){
  this.activeTab=e.target.value;
}

ngOnInit(){
  this.getUsers().subscribe(res => {
    this.users = res;
  });
}

getUsers(){
  return this.http
  .get("assets/files/folder.json")
  .pipe(
    map((res:any) =>{
      return res.data;
    })
  )
}

}
