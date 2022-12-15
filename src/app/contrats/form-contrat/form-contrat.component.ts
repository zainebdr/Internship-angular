import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ToastrService } from 'ngx-toastr';
import { Contrat } from 'src/app/core/model/contrat';
import { Etudiant } from 'src/app/core/model/etudiant';
import { ContratService } from 'src/app/core/service/contrat.service';
import { EtudiantsService } from 'src/app/core/service/etudiant.service';

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
  public etudiantList: Etudiant[]
  public prenomE: string

  constructor(public   contratService:ContratService,public etudiantService:EtudiantsService,private route: ActivatedRoute,  private modalService: NgbModal,public toast: ToastrService,private router: Router) { }

  ngOnInit(): void {
    let id= this.route.snapshot.params['idContrat']
    console.log(id)
    this.contratService.getContratbyid(id).subscribe(
      (data:Contrat)=>{this.contrat=data})
      this.getEtudiants();
  }

  onSubmit(form: NgForm){
  //console.log(id)
    this.contratService.addContrat(this.contrat,this.prenomE).subscribe(
      ()=>this.router.navigate(['/list'])
    )
    const toast = this.toast.success('update successfully', 'done', {
      timeOut: 3000,
    });

  }
  getEtudiants() {
    this.etudiantService.getAllEtudiants().subscribe( (data:Etudiant[])=>
    {
      this.etudiantList=data;
        console.log("hedha l etudiant",this.etudiantList=data)
      }
    )
  }

}
