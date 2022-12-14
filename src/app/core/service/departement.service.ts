import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { environment } from 'src/environments/environment';
import { Departement } from '../model/departement';

@Injectable({
  providedIn: 'root'
})
export class DepartementService {
  public uri= environment.uri

  constructor(private http:HttpClient) { }
  getAllDep(){
      return this.http.get<Departement[]>(this.uri+'getD')
  }
  deletedepbyID(id:number){
      return this.http.delete(this.uri+'delDep/'+id);
  }
  adddep(e:Departement){
    return this.http.post(this.uri+'addDep',e)
  }
  getdepbyid(id:number){
    return this.http.get<Departement>(this.uri+'getDepby/'+id)

  }
  updatDep(e:Departement){
    return this.http.put(this.uri+'putDep/'+e.idDepart,e)
  }
}
