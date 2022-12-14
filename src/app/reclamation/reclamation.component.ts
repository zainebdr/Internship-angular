import { Component, OnInit } from '@angular/core';
import { Reclamation } from '../core/model/Reclamation';
import { ReclamationService } from '../core/service/reclamation.service';

@Component({
  selector: 'app-reclamation',
  templateUrl: './reclamation.component.html',
  styleUrls: ['./reclamation.component.scss']
})
export class ReclamationComponent implements OnInit {
  public listRec:Reclamation[];
  public title="List de Reclamation";
 
  constructor(private RecService:ReclamationService) { }
 
  getRec():void{
    this.RecService.getAllRec().subscribe(
      (data:Reclamation[])=>{
        console.log(this.listRec=data)
      }
      
      
      
      )
  }
  deleteRec(p:Reclamation){
    let i = this.listRec.indexOf(p);
    this.RecService.deleteRecbyId(p.idRec).subscribe(
      ()=>this.listRec.splice(i, 1)
    )

  }
  ngOnInit(): void {
    this.getRec()
  }

}
