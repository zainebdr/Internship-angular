import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Contrat } from 'src/app/core/model/contrat';
import { ContratService } from 'src/app/core/service/contrat.service';
import { Observable } from 'rxjs';
import { ModalDismissReasons, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { NgForm } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { Etudiant } from 'src/app/core/model/etudiant';
import { EtudiantsService } from 'src/app/core/service/etudiants.service';
@Component({
  selector: 'app-add-contrat',
  templateUrl: './add-contrat.component.html',
  styleUrls: ['./add-contrat.component.scss']
})
export class AddContratComponent implements OnInit {
  public list: Contrat[];
  closeResult: string;
  public contrat: Contrat
  public etudiantList: Etudiant[]
  public prenomE: string



  @Input()
  etudiant = '';
  @Output() addedResult = new EventEmitter<string>();





  constructor(public   contratService:ContratService, public etudiantService:EtudiantsService, private route: ActivatedRoute,  private modalService: NgbModal,public toast: ToastrService) { }



  ngOnInit(): void {
    this.contrat= new Contrat()
  }


  open(content) {
    this.modalService.open(content).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return  `with: ${reason}`;
    }
  }
  onSubmit(form: NgForm) {

    console.log(form.value)
    console.log("hedha prenom",this.etudiant)
    this.etudiantService.assignEtudtoContrat(form.value,this.etudiant).subscribe((res) => {
      this.resetForm(form)
      this.addedResult.emit("Contrat ajouté");

     const toast = this.toast.success('saved successfully', 'done', {
      timeOut: 3000,
    });
      this.modalService.dismissAll();
    });
  }
  resetForm(form?: NgForm) {
    if (form) form.reset();
    this.contratService.selectedContrat = {
  idContrat:null,
      dateDebutContrat: null,
      dateFinContrat: null,
      archive: false,
      specialite: '',
      etudiant:null

    };
  }
  refreshCandidatList() {

    this.contratService.getAllContrat().subscribe( (data:Contrat[])=>
    {

        console.log(this.list=data)
      }
    )


  }

}
