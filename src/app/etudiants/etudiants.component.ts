import { Component, OnInit } from '@angular/core';
import { Etudiant } from '../core/model/Etudiants';
import { EtudiantsService } from '../core/service/etudiants.service';

@Component({
  selector: 'app-etudiants',
  templateUrl: './etudiants.component.html',
  styleUrls: ['./etudiants.component.scss']
})
export class EtudiantsComponent implements OnInit {
  public listEtudiant:Etudiant[];
  constructor(private EtudService:EtudiantsService) { }

  ngOnInit(): void {
    this.showlistEtud()
  }

  showlistEtud():void{
    this.EtudService.getAllEtudiants().subscribe(
      (data:Etudiant[])=>{
        console.log(this.listEtudiant=data)
      }
      
      )
  }

  deleteEtid(etu:Etudiant){
    let i = this.listEtudiant.indexOf(etu);
    this.EtudService.deleteEtudiant(etu.idEtudiant).subscribe(
      ()=>this.listEtudiant.splice(i,1)
    )

  }
}
