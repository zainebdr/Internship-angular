import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/core/service/user.service';

@Component({
  selector: 'app-list-user',
  templateUrl: './list-user.component.html',
  styleUrls: ['./list-user.component.scss']
})
export class ListUserComponent implements OnInit {

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
 this.email=this.data2.email
  this.role=this.data2.role
  this.password=this.data2.password
  this.id=this.data2.id

}
    )
  }

  update()
{
  let data:any ={
    "id":this.id,
    "username":this.username,
    "password":this.password,
    "email":this.email,
  

  }

  this.sr.update(this.id,data).subscribe(ex=>{
    console.log(ex)
    this.getAll()
  })
}

  ngOnInit(): void {
    this.getAll()
  }

}
