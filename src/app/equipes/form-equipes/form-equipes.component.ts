import { Component, OnInit } from '@angular/core';
import { Equipes } from 'src/app/core/model/Equipes';
import { EquipesService } from 'src/app/core/service/equipes.service';
import { Router ,ActivatedRoute} from '@angular/router';
import { detailEquipes } from 'src/app/core/model/detailEquipes';
@Component({
  selector: 'app-form-equipes',
  templateUrl: './form-equipes.component.html',
  styleUrls: ['./form-equipes.component.scss']
})
export class FormEquipesComponent implements OnInit {
    
 
  public Equipe:Equipes;
  public action:String;
  public AvailableID:detailEquipes[];
  public detail:detailEquipes;
  selectedid:number;

  constructor(private EquipeService:EquipesService,private route:Router,private currentroute:ActivatedRoute) { }

  ngOnInit(): void {

    this.EquipeService.findIFNOTASSIGNED().subscribe(
        (data:detailEquipes[])=>{
            this.AvailableID=data;
        }

    )
    let id =this.currentroute.snapshot.params['idEquipe'];
    let iddetail =this.currentroute.snapshot.params['idEqp'];
    if(id!=null){
      this.selectedid=iddetail;

      this.EquipeService.getEquipebyid(id).subscribe(
       
        (data:Equipes)=>{this.Equipe=data
        
        
        }
        
      );
      //update
      this.action='update';
    }else{
      //add
      this.Equipe=new Equipes()
      this.action='ADD';
    }

  }

  saveEquipe(){
    if(this.action=='update'){
      this.EquipeService.addAndAssignEquipe(this.Equipe,this.selectedid).subscribe(
        ()=>this.route.navigate(['/equipes']),
        ()=>{console.log('error'),
        ()=>{console.log('complete')}}
      )

    }else{
      console.log(this.selectedid);
    this.EquipeService.addAndAssignEquipe(this.Equipe,this.selectedid).subscribe(
      ()=>this.route.navigate(['/equipes']),
      ()=>{console.log('error'),
      ()=>{console.log('complete')}}
    )
    }
  }
  
}
