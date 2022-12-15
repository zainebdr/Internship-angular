import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Universite } from '../model/universite';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class UniversiteService {
  public uri = environment.uri;
  constructor(private http: HttpClient) {}

  getAllUniversites() {
    return this.http.get<Universite[]>(this.uri + 'allUni');
  }

  getUniversiteById(id: number) {
    return this.http.get<Universite>(this.uri + 'getUniById/' + id);
  }

  addUniversite(u: Universite) {
    return this.http.post(this.uri + 'addUni', u);
  }

  updateUniversite(u: Universite) {
    return this.http.put(this.uri + 'putUni/' + u.idUni, u);
  }

  deleteUniversite(id: number) {
    return this.http.delete(this.uri + 'delUni/' + id);
  }

  addDepartementToUniversite(idDep, IdUniv) {
    return this.http.post(this.uri + 'addUniDep/' + IdUniv + '/' + idDep,{});
  }
}
