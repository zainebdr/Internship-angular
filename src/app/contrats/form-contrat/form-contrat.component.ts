import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ToastrService } from 'ngx-toastr';
import { Contrat } from 'src/app/core/model/contrat';
import { ContratService } from 'src/app/core/service/contrat.service';

@Component({
  selector: 'app-form-contrat',
  templateUrl: './form-contrat.component.html',
  styleUrls: ['./form-contrat.component.scss']
})
export class FormContratComponent implements OnInit {
  public focus;
  public list: Contrat[];
  closeResult: string;
  public contrat: Contrat;


  constructor(public   contratService:ContratService,private route: ActivatedRoute,  private modalService: NgbModal,public toast: ToastrService,private router: Router) { }

  ngOnInit(): void {
    let id= this.route.snapshot.params['idContrat']
    console.log(id)
    this.contratService.getContratbyid(id).subscribe(
      (data:Contrat)=>{this.contrat=data})
  }

  onUpdate(form: NgForm){
    this.contratService.updateContrat(this.contrat).subscribe(
      ()=>this.router.navigate(['/list'])
    )
    const toast = this.toast.success('update successfully', 'done', {
      timeOut: 3000,
    });

  }

}
