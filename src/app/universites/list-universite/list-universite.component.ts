import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ModalDismissReasons, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ToastrService } from 'ngx-toastr';
import { Universite } from 'src/app/core/model/universite';
import { UniversiteService } from 'src/app/core/service/universite.service';

@Component({
  selector: 'app-list-universite',
  templateUrl: './list-universite.component.html',
  styleUrls: ['./list-universite.component.scss'],
})
export class ListUniversiteComponent implements OnInit {
  listUniversites: Universite[];
  chosenUniversite:any;

  @ViewChild('content') addview !: ElementRef

  constructor(private serviceUniversite: UniversiteService,private modalService: NgbModal, private toastrService: ToastrService) {}

  ngOnInit(): void {
    this.getUniversites();
  }

  getUniversites() {
    this.serviceUniversite
      .getAllUniversites()
      .subscribe((data: Universite[]) => {
        this.listUniversites = data;
        console.log(this.listUniversites);
      });
  }

  delete(univ: Universite){
    console.log('id universite', univ.idUni)
    this.serviceUniversite.deleteUniversite(univ.idUni).subscribe();
    console.log('delete success');
    console.log('index of', this.listUniversites.indexOf(univ))
    let index = this.listUniversites.indexOf(univ);
    this.listUniversites.splice(index,1);
    
  }


  open() {
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

  hi(msg)
  {
    
    this.toastrService.success("Ajout departement: "+ msg, "succès")
  }
}
