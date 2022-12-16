import { Component, OnInit } from '@angular/core';
import { TokenStorageService } from 'src/app/core/service/token-storage.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  constructor(private token: TokenStorageService) { }
  currentUser: any;
  ngOnInit(): void {
    this.currentUser = this.token.getUser();
  }
}
