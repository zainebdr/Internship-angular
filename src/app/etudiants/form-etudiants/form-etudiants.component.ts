import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ModalDismissReasons,NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ToastrService } from 'ngx-toastr';
import { Departement } from 'src/app/core/model/departement';

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
  closeResult = '';

  public departListe:Departement[];
  public depart:Departement;
  selectedid:number;


  constructor(private EtudiantService:EtudiantsService,
    private route: Router, 
    private currentRoute: ActivatedRoute,
    public toast: ToastrService,
    private modalService: NgbModal) { }

  ngOnInit(): void {
    let id=this.currentRoute.snapshot.params['idEtudiant']
    let idDepart =this.currentRoute.snapshot.params['idDepart'];
    
    this.EtudiantService.findListDept().subscribe(
      (data:Departement[])=>{
      this.departListe=data;
      }
    )
    if(id!=null){
      this.selectedid=idDepart;
      console.log(this.selectedid)
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
      this.EtudiantService.assignEtudtoDep(this.Etudiant,this.selectedid).subscribe(
        ()=>this.route.navigate(['/etudiants']),
        ()=>{console.log('error'),
        ()=>{console.log('complete')}}
      )
    this.toast.success("La modification de l'étudiant "+"'"+this.Etudiant.nom+' '+this.Etudiant.prenom+"'"+" est effectué avec sucées")
    }
    else{
      this.EtudiantService.assignEtudtoDep(this.Etudiant,this.selectedid).subscribe(
        ()=>this.route.navigate(['/etudiants']),
        ()=>{console.log('error'),
        ()=>{console.log('complete')}}

        )
    this.toast.success("Ajout de l'étudiant "+this.Etudiant.nom+' '+this.Etudiant.prenom+" est effectué avec sucées")
    }
  }
  open(content) {
		this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title' }).result.then(
			(result) => {
				this.closeResult = `Closed with: ${result}`;
			},
			(reason) => {
				this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
			},
		);
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