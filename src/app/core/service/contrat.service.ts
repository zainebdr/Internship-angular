import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Contrat } from '../model/contrat';
@Injectable({
  providedIn: 'root'
})
export class ContratService {

  public uri= environment.uri;
  selectedContrat: Contrat;
  public contrats: Contrat[];

  constructor(private http:HttpClient ) { }
  getAllContrat(){
      return this.http.get<Contrat[]>(this.uri+'getC')
  }
  addContrat(c:Contrat){
    console.log(c)
    return this.http.post(this.uri+'addC',c)
  }
  deleteContratbyId(id:number){
      return this.http.delete(this.uri+'delC/'+id);
  }

  getContratbyid(id:number){
    return this.http.get<Contrat>(this.uri+'getCbyid/'+id)

  }
  updateContrat(c:Contrat){
    return this.http.put(this.uri+'putC/'+c.idContrat,c)
  }
}
