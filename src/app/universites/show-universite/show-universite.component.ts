import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { Universite } from 'src/app/core/model/universite';
import { UniversiteService } from 'src/app/core/service/universite.service';

@Component({
  selector: 'app-show-universite',
  templateUrl: './show-universite.component.html',
  styleUrls: ['./show-universite.component.scss'],
})
export class ShowUniversiteComponent implements OnInit {
  idUniversite: any;
  universite: Universite = new Universite();
  constructor(
    private route: ActivatedRoute,
    private serviceUniversite: UniversiteService
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      this.idUniversite = params['id'];
    });
    console.log("idUniversite",this.idUniversite);
    this.getUniversite(this.idUniversite);
  }

  getUniversite(id:number) {
    this.serviceUniversite
      .getUniversiteById(id)
      .subscribe((data: Universite) => {
        console.log('appel service', data);
        this.universite = data;
        console.log('data',data)
      });
  }
}
