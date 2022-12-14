import { Component, OnInit } from '@angular/core';
import { Universite } from 'src/app/core/model/universite';
import { UniversiteService } from 'src/app/core/service/universite.service';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-update-universite',
  templateUrl: './update-universite.component.html',
  styleUrls: ['./update-universite.component.scss'],
})
export class UpdateUniversiteComponent implements OnInit {
  idUniversite: any;
  universite: Universite = new Universite();
  submitted = false;
  validName: boolean ;
  validDescription: boolean ;

  constructor(
    private route: ActivatedRoute,
    private serviceUniversite: UniversiteService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.validName = false;
    this.validDescription = false;
    this.route.params.subscribe((params) => {
      this.idUniversite = params['id'];
    });
    console.log('idUniversite', this.idUniversite);
    this.getUniversite(this.idUniversite);
    console.log('universite ', this.universite);
  }

  getUniversite(id: number) {
    this.serviceUniversite
      .getUniversiteById(id)
      .subscribe((data: Universite) => {
        this.universite = data;
        console.log(this.universite);
      });
  }

  updateUniversite(u: Universite) {
    console.log(this.universite);
    this.serviceUniversite.updateUniversite(u).subscribe();
  }

  cancel() {
    this.router.navigate(['/universite/show/' + this.universite.idUni]);
  }

  onSubmit() {
    console.log(this.universite);
    this.updateUniversite(this.universite);
    this.router.navigate(['/universite/show/' + this.universite.idUni]);
  }

  isValidName(): boolean {
    if (this.universite.nomUni.length > 4) {
      this.validName = true;
      return true;
    } else {
      this.validName = false;
      return false;
    }
  }

  isValidDescription(): boolean {
    if (this.universite.description.length > 10) {
      return true;
    }
    return false;
  }
}
