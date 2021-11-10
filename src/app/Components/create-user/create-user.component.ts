import { Component, OnInit, ViewChild } from '@angular/core';
import { EmailValidator, FormGroup, NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from 'src/app/models/user.model';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.scss'],
})
export class CreateUserComponent implements OnInit {
  constructor(private userService: UserService, private route: Router) {}
  users: User[] = [];
  user: User = new User();
  ngOnInit(): void {}
  len!: number;
  addUser() {
    this.users = this.userService.getUserService();
    this.len = this.users.length;
    for (let i = 0; i < this.len; i++) {
      if (this.users[i].username == this.user.username) {
        console.log('UserName Already Exists');
        console.log(this.user);
        return;
      }
    }

    this.userService.addUserService(this.user);
    this.users = this.userService.getUserService();
    console.log(this.users);
    alert('User Added');
    this.route.navigate(['user-list']);
  }
}
