import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  //API_URL : string ="http://localhost:8089/action";

  constructor(private http : HttpClient) { }

  getBook(){
   return  this.http.get("http://localhost:8090/action");
  }

  saveBook(data:any){
    return  this.http.post("http://localhost:8090/action",data);
   }
   deleteBook(name : string){
    return  this.http.delete("http://localhost:8090/action?name="+name);
   }
   
}
