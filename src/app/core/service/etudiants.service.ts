import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Etudiant } from '../model/Etudiants';

@Injectable({
  providedIn: 'root'
})
export class EtudiantsService {
  public uri= environment.uri
  constructor(private http:HttpClient) { }

  getAllEtudiants(){
      return this.http.get<Etudiant[]>(this.uri+'getall')
  }
  deleteEtudiant(id:number){
      return this.http.delete(this.uri+'del/'+id);
  }
  addEtudiant(etu:Etudiant){
    return this.http.post(this.uri+'addetude',etu)
  }
  getEtudiantbyid(id:number){
    return this.http.get<Etudiant>(this.uri+'getone/'+id)

  }
  updateEtudiant(etu:Etudiant){
    return this.http.put(this.uri+'put/'+etu.idEtudiant,etu)
  }
}
