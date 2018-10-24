import { Component } from '@angular/core';
import axios from 'axios';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  word = "";
  mean = "";
  app_id = "db81d3b5";
  app_key = "761c0da04a192ece39097142615cbf79";
  //dict = new Dictionary(this.app_id, this.app_key);
  //mean = dict.find(this.word,function(error,data){if(error) return console.log(error); console.log(data); });
  
  postRequest = {
    host: "od-api.oxforddictionaries.com",
    path: "/api/v1/entries/en/" + this.word,
    port: "443",
    method: "GET",
    rejectUnauthorized: false,
    headers: {
     'Content-Type': 'text/html',
     'app_id': this.app_id,
     'app_key': this.app_key
    }
   };


  fetchData(){
  //    axios.get(this.postRequest).then((res)=>{
         
  //    }).catch((error)=>{
  //      console.log(error)
  //    })
    }
   
}
