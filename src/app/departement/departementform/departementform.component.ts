import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Departement } from 'src/app/core/model/departement';
import { DepartementService } from 'src/app/core/service/departement.service';

@Component({
  selector: 'app-departementform',
  templateUrl: './departementform.component.html',
  styleUrls: ['./departementform.component.scss'],
})
export class DepartementformComponent implements OnInit {
  public departement: Departement;
  public action: String;

  public msg = '';

  constructor(
    private departementService: DepartementService,
    private route: Router,
    private currentroute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    let id = this.currentroute.snapshot.params['idDepart'];
    if (id != null) {
      this.departementService.getdepbyid(id).subscribe((data: Departement) => {
        this.departement = data;
      });
      //update
      this.action = 'update';
    } else {
      //add
      this.departement = new Departement();
      this.action = 'ADD';
    }
  }

  savedepartement() {
    if (this.action == 'update') {
      this.departementService.updatDep(this.departement).subscribe(
        () => this.route.navigate(['/departement']),
        () => {
          console.log('error'),
            () => {
              console.log('complete');
            };
        }
      );
    } else {
      this.departementService.adddep(this.departement).subscribe(
        () => this.route.navigate(['/departement']),
        () => {
          console.log('error'),
            () => {
              console.log('complete');
            };
        }
      );
    }
  }
}
