import { Component, OnInit } from '@angular/core';
import { FormControl,FormGroup,Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Reclamation } from 'src/app/core/model/Reclamation';
import { ReclamationService } from 'src/app/core/service/reclamation.service';

@Component({
  selector: 'app-form-reclamation',
  templateUrl: './form-reclamation.component.html',
  styleUrls: ['./form-reclamation.component.scss']
})
export class FormReclamationComponent implements OnInit {

  public FormRec:FormGroup

  public Rec:Reclamation;
  typeList: any = ['Note', 'Absence', 'Autres']
  public action:String;

  constructor(private recService:ReclamationService,private route:Router,private currentRoute:ActivatedRoute) { }

  ngOnInit(): void {
    this.FormRec = new FormGroup(
      {
        
        description:new FormControl('',[Validators.required ,Validators.minLength(12)]),

        typeReclamation: new FormControl('', Validators.required)
      }
    )
    let id =this.currentRoute.snapshot.params['idRec'];
    if(id!=null){
      this.recService.getRecbyid(id).subscribe(
       
        (data:Reclamation)=>{this.Rec=data}
      );
      //update
      this.action='update';
    }else{
      //add
      this.Rec= new Reclamation()

      console.log(this.Rec);
      this.action='ADD';
    }
  }
  addRec(){
    if(this.action=='update'){
      this.recService.updateRec(this.Rec).subscribe(
        ()=>this.route.navigate(['/reclamation']),
        ()=>{console.log('error'),
        ()=>{console.log('complete')}}
      )

    }else{
    this.recService.addRec(this.FormRec.value).subscribe(
      ()=>this.route.navigate(['/reclamation']),
      ()=>{console.log('error')},
      ()=>{console.log(this.FormRec.value.desc),

        console.log(this.FormRec.value),
      ()=>{console.log('complete')}}

    )
    }
  }

}
