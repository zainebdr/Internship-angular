import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { EtudiantsService } from 'src/app/core/service/etudiants.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
  searchValue:string ='';
  constructor() { }
 
  ngOnInit(): void {
    
  }


  @Output()
  changeSearch :EventEmitter<string> = new EventEmitter<string>();  

    OnSearchChanged(){
      this.changeSearch.emit(this.searchValue)
    }

}
