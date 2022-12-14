import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { detailEquipes } from '../core/model/detailEquipes';
import { DetailequipesService } from '../core/service/detailequipes.service';
import { FormDetailEquipesComponent } from './form-detail-equipes/form-detail-equipes.component';

@Component({
  selector: 'app-detailequipes',
  templateUrl: './detailequipes.component.html',
  styleUrls: ['./detailequipes.component.scss']
})
export class DetailequipesComponent implements AfterViewInit {

  public listEquipe:detailEquipes[];
  public title="List Of Details Equipes";
  public focus;
  editdata:any;
  constructor(private EquipeService:DetailequipesService) {
    this.getEquipes()
    this.EquipeService.Refreshrequired.subscribe(r=>{
  
      this.getEquipes()
    })

   
   }
   @ViewChild(FormDetailEquipesComponent) addview !:FormDetailEquipesComponent

   ngAfterViewInit(): void {

    
  }
  getEquipes():void{
    this.EquipeService.getAlldetailEquipes().subscribe(
      (data:detailEquipes[])=>{
       this.listEquipe=data
      }
      
      )
  }
  deleteEquipe(p:detailEquipes){
    let i = this.listEquipe.indexOf(p);
    if(confirm("Do you want to remove?")){
    this.EquipeService.deletedetailEquipebyId (p.idEqp).subscribe(
      ()=>this.listEquipe.splice(i, 1)
    )
    }

  }
  functionedit(code:any){
    
    this.addview.LoadEditData(code);

  } 

  searchText:string ='';
    OnSearchTextEntered(sv:any){
      this.searchText=sv;
      console.log(this.searchText);
    }
    

  }



