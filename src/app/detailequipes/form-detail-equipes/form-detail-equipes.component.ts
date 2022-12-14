import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup ,Validators} from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ModalDismissReasons, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { detailEquipes } from 'src/app/core/model/detailEquipes';
import { DetailequipesService } from 'src/app/core/service/detailequipes.service';

@Component({
  selector: 'app-form-detail-equipes',
  templateUrl: './form-detail-equipes.component.html',
  styleUrls: ['./form-detail-equipes.component.scss'],

})
export class FormDetailEquipesComponent implements OnInit {

  public FormDet:FormGroup

  public listEquipe:detailEquipes[];
  public Rec:detailEquipes;
  public action:String;
  editdata:any;

  constructor(private recService:DetailequipesService,private route:Router,private currentRoute:ActivatedRoute,private modalService: NgbModal) {

   }
  @ViewChild('content') addview !: ElementRef


  ngOnInit(): void {


    this.FormDet = new FormGroup(
      {
        
        salle: new FormControl('',[Validators.required,Validators.min(0) ]),

        thematique: new FormControl('', [Validators.required])
      }
    )
    let id =this.currentRoute.snapshot.params['idEquipe'];
      console.log(id);
    if(id!=null){
     
      this.recService.getdetailEquipebyid(id).subscribe(
        (data:detailEquipes)=>{this.Rec=data

        }
      
      );
      //update
      this.action='update';
      this.LoadEditData(id);
    }else{
      //add
      this.Rec= new detailEquipes()
      console.log(this.Rec);
      this.action='ADD';
    }
  }
  getEquipes():void{
    this.recService.getAlldetailEquipes().subscribe(
      (data:detailEquipes[])=>{
       this.listEquipe=data
      }
      
      )
  }
  addRec(){
    if(this.action=='update'){

      this.recService.updatedetailEquipe(this.FormDet.value,this.currentRoute.snapshot.params['idEquipe']).subscribe(
        ()=>this.route.navigate(['/detailequipes']),
        ()=>{console.log('error'),
        ()=>{console.log('complete')}}
      )

    }else{
    this.recService.adddetailEquipe(this.FormDet.value).subscribe(
      ()=>this.route.navigate(['/detailequipes']),
      ()=>{console.log('error')},
      ()=>{console.log(this.FormDet.value.desc),

        console.log(this.FormDet.value),
      ()=>{console.log('complete')}}

    )


    setTimeout(()=>{
      this.modalService.dismissAll();
    },1000)
    }
  
  }
  
  LoadEditData(code: any) {
    this.open();  
    this.recService.getdetailEquipebyid(code).subscribe(result => {
      this.editdata = result;
      console.log("------->"+this.editdata);
      this.FormDet.setValue({salle:this.editdata.salle,thematique:this.editdata.thematique});

    });

    

  }
  Clearform(){
    this.FormDet.setValue({salle:'',thematique:''})
  }
  open() {
    this.Clearform();
    this.modalService.open(this.addview).result.then((result) => {
    }, (reason) => {
      console.log("ena"+reason);
    });
  }
  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return `with: ${reason}`;
    }
  }

}
