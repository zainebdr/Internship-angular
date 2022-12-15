import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment'
import { Reclamation } from '../model/Reclamation';
@Injectable({
  providedIn: 'root'
})
export class ReclamationService {

  public uri= environment.uri
  constructor(private http:HttpClient) { }
    getAllRec(){
      return this.http.get<Reclamation[]>(this.uri+'getRec');
  }
  deleteRecbyId(id:number){
      return this.http.delete(this.uri+'delRec/'+id);
  }
  addRec(e:Reclamation){
    return this.http.post(this.uri+'addRec',e);
  }
  getRecbyid(id:number){
    return this.http.get<Reclamation>(this.uri+'getbyidRec/'+id);

  }
  updateRec(e:Reclamation){
    return this.http.put(this.uri+'putRec/'+e.idRec,e);
  }

}
