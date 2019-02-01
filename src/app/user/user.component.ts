import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {

  //TODO: to add an interface
  user: any;

  constructor(
    public userService: UserService
  ) { }

  ngOnInit() {
    this.userService.getUser().subscribe((user) => {
      this.user = user;
    });
  }

}
