import { Component, OnInit } from '@angular/core';
import { UserService } from '../core/service/user.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {

  data:any=[]
  data2:any=[]

  username=""
  role=""
  email=""
  password=""
  id=Number
  constructor(private sr:UserService) { }

  getAll()
  {
    this.sr.affiche().subscribe(ex=>{
      this.data=ex
      console.log(ex)
    })
  }

  delete(id:any)
  {
    this.sr.delete(id).subscribe(ex=>{
      console.log(ex)
      this.getAll()
    })
  }

  getById(id:any){
    this.sr.getUserbyId(id).subscribe(
ex=>{
  this.data2=ex
  this.username=this.data2.username
  this.role=this.data2.role
  this.password=this.data2.password
  this.id=this.data2.id

}
    )
  }

  

  ngOnInit(): void {
    this.getAll()
  }

}
