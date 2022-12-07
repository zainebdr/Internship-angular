import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Contrat } from 'src/app/core/model/contrat';
import { ContratService } from 'src/app/core/service/contrat.service';
import { Observable } from 'rxjs';
import { ModalDismissReasons, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { NgForm } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-list-contrat',
  templateUrl: './list-contrat.component.html',
  styleUrls: ['./list-contrat.component.scss']
})
export class ListContratComponent implements OnInit {
  public list: Contrat[];
  closeResult: string;
  public contrat: Contrat
  constructor(public   contratService:ContratService,private route: ActivatedRoute,  private modalService: NgbModal,public toast: ToastrService,) { }

  ngOnInit(): void {
    this.getContrats();
    console.log()
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

    this.contratService.addContrat(form.value).subscribe((res) => {
      this.resetForm(form)
     this.refreshCandidatList();

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

    };
  }

  refreshCandidatList() {

    this.contratService.getAllContrat().subscribe( (data:Contrat[])=>
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

  delete(p: Contrat) {
    if (confirm('Are you sure to delete this record ?') == true) {
    let i = this.list.indexOf(p);
    this.contratService.deleteContratbyId(p.idContrat).subscribe(
      ()=>this.list.splice(i, 1)
    )
    }
  }
}
