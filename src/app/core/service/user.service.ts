import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { UserModel } from '../model/User';
const API_URL = 'http://localhost:4200/api/test/';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  constructor(private http:HttpClient) { }

  affiche(){
    return this.http.get("http://localhost:8089/user/getall")
  }

  saveUser(UserModel:UserModel){
    return this.http.post("http://localhost:8089/user/addetude",UserModel)
  }

  delete(id:any){
    return this.http.delete("http://localhost:8089/user/del/"+id)
  }

update(id:any,UserModel:UserModel)
{
  return this.http.put("http://localhost:8089/user/put/"+id,UserModel)
}

getUserbyId(id:any){
  return this.http.get("http://localhost:8089/user/find/"+id)
}
}
