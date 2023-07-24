import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Contrat } from 'src/app/core/model/contrat';
import { ContratService } from 'src/app/core/service/contrat.service';
import { Observable } from 'rxjs';
import { ModalDismissReasons, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { NgForm } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { Etudiant } from 'src/app/core/model/etudiant';
import { EtudiantsService } from 'src/app/core/service/etudiant.service';
import { TokenStorageService } from 'src/app/core/service/token-storage.service';

@Component({
  selector: 'app-list-etudiant-contrat',
  templateUrl: './list-etudiant-contrat.component.html',
  styleUrls: ['./list-etudiant-contrat.component.scss']
})
export class ListEtudiantContratComponent implements OnInit {
  public list: Contrat[];
  closeResult: string;
  public contrat: Contrat
  public etudlist: Etudiant
  public etudiantList: Etudiant[]
  public prenomE: string
  currentUser: any;
  constructor(public   contratService:ContratService, public etudiantService:EtudiantsService, private route: ActivatedRoute,  private modalService: NgbModal,public toast: ToastrService,private token: TokenStorageService) { }




  ngOnInit(): void {
    this.currentUser = this.token.getUser();


    this.getContrats();

    this.contrat= new Contrat()
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

    this.contratService.getAllContratEtud(this.currentUser.username).subscribe( (data:Contrat[])=>
    {

        console.log(this.list=data)
      }
    )


  }


  getContrats():void{
    this.contratService.getAllContrat().subscribe( (data:Contrat[])=>
    {

        console.log(this.list=data)
      }
    )

  }



  getContratsEtud():void{
    console.log(this.currentUser.username)
    this.contratService.getAllContratEtud(this.currentUser.username).subscribe( (data:Contrat[])=>
    {

        console.log(this.list=data)
      }
    )

  }



}
