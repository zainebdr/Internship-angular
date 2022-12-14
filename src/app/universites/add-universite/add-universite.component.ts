import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Universite } from 'src/app/core/model/universite';
import { UniversiteService } from 'src/app/core/service/universite.service';

@Component({
  selector: 'app-add-universite',
  templateUrl: './add-universite.component.html',
  styleUrls: ['./add-universite.component.scss'],
})
export class AddUniversiteComponent implements OnInit {
  listUniversites: Universite[];
  addUniversityForm = new FormGroup({
    nomUni: new FormControl('', [Validators.required, Validators.minLength(4)]),
    description: new FormControl('', [Validators.required, Validators.minLength(10),]),
  });
  constructor(private serviceUniversite: UniversiteService, private router: Router
    ) {}

  ngOnInit(): void {
    this.addUniversityForm.reset();
  }

  addUniversity() {
    console.log(this.addUniversityForm.value);
    this.serviceUniversite.addUniversite(this.addUniversityForm.value).subscribe();
    //this.router.navigate(['/universite/']);

      
  }
  resetForm() {
    this.addUniversityForm.reset();
  }

  get uf(){
    return this.addUniversityForm.controls;
  }
}
