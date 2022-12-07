import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Etudiant } from 'src/app/core/model/Etudiants';
import { EtudiantsService } from 'src/app/core/service/etudiants.service';


@Component({
  selector: 'app-form-etudiants',
  templateUrl: './form-etudiants.component.html',
  styleUrls: ['./form-etudiants.component.scss']
})
export class FormEtudiantsComponent implements OnInit {
  public Etudiant:Etudiant;
  public action:String;

  constructor(private EtudiantService:EtudiantsService,
    private route: Router, 
    private currentRoute: ActivatedRoute) { }

  ngOnInit(): void {
    let id=this.currentRoute.snapshot.params['idEtudiant']
    if(id!=null){
      //update
      this.action='Modifier un';
      this.EtudiantService.getEtudiantbyid(id).subscribe(
       
        (data:Etudiant)=>{this.Etudiant=data}
      );
      
    }else{
      //add
      this.action='Ajouter un';
      this.Etudiant=new Etudiant()
      
    }

  }

  saveEtudiant(){
    if(this.action=='Modifier un '){
      this.EtudiantService.updateEtudiant(this.Etudiant).subscribe(
        ()=>this.route.navigate(['/etudiants']),
        ()=>{console.log('error'),
        ()=>{console.log('complete')}}
      )

    }else{
    this.EtudiantService.addEtudiant(this.Etudiant).subscribe(
      ()=>this.route.navigate(['/etudiants']),
      ()=>{console.log('error'),
      ()=>{console.log('complete')}}
    )
    }
  }

}
