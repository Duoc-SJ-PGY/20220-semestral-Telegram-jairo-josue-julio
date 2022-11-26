
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { map } from "rxjs/operators";


@Component({
  selector: 'app-folder',
  templateUrl: './folder.page.html',
  styleUrls: ['./folder.page.scss'],
})
export class FolderPage  {

  users: any = [];




  activeTab = 'chats';
  constructor(private activatedRoute: ActivatedRoute, private http: HttpClient) { }

  segmentChange(e){
    this.activeTab=e.target.value;
  }

  ngOnInit(){
    console.log("hoola");
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

