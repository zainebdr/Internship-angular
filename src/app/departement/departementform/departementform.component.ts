import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Departement } from 'src/app/core/model/departement';
import { DepartementService } from 'src/app/core/service/departement.service';
import { UniversiteService } from 'src/app/core/service/universite.service';

@Component({
  selector: 'app-departementform',
  templateUrl: './departementform.component.html',
  styleUrls: ['./departementform.component.scss'],
})
export class DepartementformComponent implements OnInit {
  public departement: Departement;
  public action: String = 'ADD';

  public msg = '';

  @Input()
  universite = '';
  @Output() addedResult = new EventEmitter<string>();

  constructor(
    private departementService: DepartementService,
    private route: Router,
    private currentroute: ActivatedRoute,
    private universiteService: UniversiteService
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
        () => {
          if (this.universite) {
            this.departementService.getAllDep().subscribe((data) => {
              let id = data[data.length - 1].idDepart;
              this.universiteService.addDepartementToUniversite(id,this.universite).subscribe(() => {
                this.addedResult.emit("Departement ajouté, id du dep : " + id);
              });
            });
          } else {
            this.route.navigate(['/departement']);
          }
          
        },
        () => {
          this.addedResult.emit('error'), () => {};
        }
      );
    }
  }
}
