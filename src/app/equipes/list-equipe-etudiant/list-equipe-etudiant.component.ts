import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { detailEquipes } from 'src/app/core/model/detailEquipes';
import { Equipes } from 'src/app/core/model/Equipes';
import { EquipesService } from 'src/app/core/service/equipes.service';

@Component({
  selector: 'app-list-equipe-etudiant',
  templateUrl: './list-equipe-etudiant.component.html',
  styleUrls: ['./list-equipe-etudiant.component.scss']
})
export class ListEquipeEtudiantComponent implements OnInit {

  public listEquipe:Equipes[];
  public title="List Of Equipes";
  changeText: boolean[];
  public listEquipeFULL:Equipes[];

  constructor(private EquipeService:EquipesService,private route:Router) {

    this.changeText = [];
   }

  ngOnInit(): void {
    this.listEquipe=[];
    this.getEquipes()

  }

  getEquipes():void{
    this.EquipeService.getAllEquipes().subscribe(
      (data:Equipes[])=>{

        console.log(this.listEquipe=data)

        for(let i=0;i<this.listEquipe.length;i++){
          this.EquipeService.findIdDet(this.listEquipe[i].idEquipe).subscribe(
            (data1:detailEquipes )=>{
              this.listEquipe[i].detailEquipe1= data1;
              this.changeText[data1.idEqp] = false;
            }
          )
        }
        //console.log(this.listEquipe[0].detailEquipe1.salle)
      }

      )
  }
  deleteEquipe(p:Equipes){
    let i = this.listEquipe.indexOf(p);
    this.EquipeService.deleteEquipebyId(p.idEquipe).subscribe(
      ()=>this.listEquipe.splice(i, 1)
    )

  }
  setOpen(){


  }
  key :string= 'idEquipe'
  reverse:boolean=false;
  sort(key){
    this.key=key

    this.reverse=!this.reverse;
  }
  p:number = 1;
}
