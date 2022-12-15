import { Component, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Etudiant } from '../core/model/Etudiants';
import { EtudiantsService } from '../core/service/etudiants.service';


@Component({
  selector: 'app-etudiants',
  templateUrl: './etudiants.component.html',
  styleUrls: ['./etudiants.component.scss']
})
export class EtudiantsComponent implements OnInit {
  public listEtudiant:Etudiant[];
  searchValue:string ='';
  public etudiantCount?: number;
  public pourcentage: String

  constructor(private EtudService:EtudiantsService, public toast: ToastrService) { }

  ngOnInit(): void {

    

    this.showlistEtud()
    this.EtudService.Refreshrequired.subscribe(r=>{
  
      this.showlistEtud()
    })
   
    this.EtudService.countEtudiant().subscribe((count) => {
      this.etudiantCount = count;
      console.log(count);
    });

    this.EtudService.pourcentage().subscribe((pour)=> {
      this.pourcentage=pour;
      console.log(pour);
    })
  }

  showlistEtud():void{
    this.EtudService.getAllEtudiants().subscribe(
      (data:Etudiant[])=>{
        console.log(this.listEtudiant=data)
        this.listEtudiant=data;
          
      } 
      
    )
    }
  deleteEtid(etu:Etudiant){
    if (confirm('Vous valider la suppression ?') == true){
    let i = this.listEtudiant.indexOf(etu);
    this.EtudService.deleteEtudiant(etu.idEtudiant).subscribe(
      ()=>this.listEtudiant.splice(i,1)
    )
    }
    this.toast.error("La suppression de l'étudiant "+etu.nom+' '+etu.prenom+" est effectué avec sucées")
  }




  searchText:string ='';
  OnSearchTextEntered(sv:any){
    this.searchText=sv;
    console.log(this.searchText);
  }
  
trier():void{
  this.EtudService.trie().subscribe(
    (data:Etudiant[])=>{
     this.listEtudiant=data
    }
    
    )
}
p:number = 1;

}
