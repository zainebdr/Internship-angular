import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Etudiant } from '../model/Etudiants';
import { Observable, Subject} from 'rxjs';
import { DepartementService } from './departement.service';
import { Contrat } from '../model/contrat';
@Injectable({
  providedIn: 'root'
})
export class EtudiantsService {

  private _refreshrequired = new Subject<void>();
 deptservice: DepartementService;

  get Refreshrequired() {
    return this._refreshrequired;
  }

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

  countEtudiant(): Observable<any>{
    return this.http.get(this.uri+'getcount',{ responseType: 'text' })

  }

  pourcentage():Observable<any>{

    return this.http.get(this.uri+'getOption'+"/GAMIX"+"/SE"+"/NIDS"+"/SIM",{responseType: 'text'})

  }

  trie(){
    return this.http.get<Etudiant[]>(this.uri+'trieParNom')
  }

  assignEtudtoDep(etu:Etudiant, idDepart:Number){
    return this.http.put(this.uri+'addAssEtoD/'+idDepart,etu)
  }

  findNomDept(id:number){
    return this.http.get(this.uri+'getNomdepart2/'+id);
  }

  findListDept(){
  return this.http.get(this.uri+'getD')
}


assignEtudtoContrat(c:Contrat, prenom:string){
  return this.http.put(this.uri+'addCtrTo/'+prenom,c)
}
}
