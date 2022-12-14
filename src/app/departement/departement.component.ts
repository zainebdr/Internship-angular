import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Departement } from '../core/model/departement';
import { DepartementService } from '../core/service/departement.service';

@Component({
  selector: 'app-departement',
  templateUrl: './departement.component.html',
  styleUrls: ['./departement.component.scss', './notif.scss'],
})
export class DepartementComponent implements OnInit {
  page: number = 1;
  count: number = 0;
  tableSize: number = 5;
  tableSizes: any = [3, 6, 9, 12];

  searchText = '';

  public listdepartement: Departement[];
  public title = 'List Of Departments';
  changeText: boolean;

  public msg = '';

  constructor(
    private departementervice: DepartementService,
    private route: Router
  ) {
    this.changeText = false;
  }

  ngOnInit(): void {
    this.getdepartement();
  }

  getdepartement(): void {
    this.departementervice.getAllDep().subscribe((data: Departement[]) => {
      console.log((this.listdepartement = data));
    });
  }

  onTableDataChange(event: any) {
    this.page = event;
    this.getdepartement();
  }

  filterCondition(search: string) {
    this.listdepartement = this.listdepartement.filter((item) => {
      return item.nomDepart.toLowerCase().indexOf(search.toLowerCase()) !== -1;
    });
  }

  onTableSizeChange(event: any) {
    this.tableSize = event.target.value;
    this.page = 1;
    this.getdepartement();
  }
  deletedepartement(p: Departement) {
    let i = this.listdepartement.indexOf(p);
    this.departementervice.deletedepbyID(p.idDepart).subscribe(() => {
      this.listdepartement.splice(i, 1);
      this.showDelMsg('Departement Deleted Successfully', 1);
    });
  }

  showDelMsg(msg: string, type: number) {
    let snackBar = document.getElementById('notif');
    if (type == 1) {
      snackBar.classList.add('del');
    } else if (type == 2) {
      snackBar.classList.add('update');
    }
    this.msg = msg;
    snackBar.className = 'show-bar';
    setTimeout(() => {
      snackBar.className = snackBar.className.replace('show-bar', '');
      window.location.reload();
    }, 2500);
  }
}
