import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Departement } from 'src/app/core/model/departement';
import { Etudiant } from 'src/app/core/model/Etudiants';
import { EtudiantsService } from 'src/app/core/service/etudiants.service';


@Component({
  selector: 'app-etudiant-front',
  templateUrl: './etudiant-front.component.html',
  styleUrls: ['./etudiant-front.component.scss']
})
export class EtudiantFrontComponent implements OnInit {
public Etudiant:Etudiant;
public action:String;
public idEtudiant:number;
public etu;
public departListe:Departement[];
public depart:Departement;
selectedid:number;

  constructor(private EtudiantService:EtudiantsService,
    private route: Router, 
    private currentRoute: ActivatedRoute,) { }

  ngOnInit(): void {
    this.etu = new Etudiant();
    this.idEtudiant=4
    
    let id=this.currentRoute.snapshot.params['idEtudiant']
    let idDepart =this.currentRoute.snapshot.params['idDepart'];
    
    this.EtudiantService.findListDept().subscribe(
      (data:Departement[])=>{
      this.departListe=data;
      }
    )

    if(id!=null){
      this.selectedid=idDepart;
      //update
      this.action='Modifier un';
      this.EtudiantService.getEtudiantbyid(id).subscribe(
       
        (data:Etudiant)=>{this.etu=data}
        
      );
      
  }

}

}
