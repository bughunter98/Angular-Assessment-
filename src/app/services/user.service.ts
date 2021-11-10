import { Injectable } from '@angular/core';
import { User } from '../models/user.model';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor() {}

  addUserService(user: User) {
    this.users.push(user);
  }
  getUserService() {
    return this.users;
  }
  users: User[] = [
    {
       username: 'Saiteja908',
       password: '*******',
       name: 'Sai Teja',
       dob: new Date('1998-08-20'),
       address: 'Hyderabad',
       email: 'sai@gmail.com',
       gender: 'Male',
       language: '',
     },
     {
      username: 'Saiteja90',
      password: '*******',
      name: 'Teja',
      dob: new Date('2001-11-20'),
      address: 'Hyderabad',
      email: 'sai@gmail.com',
      gender: 'Male',
      language: '',
    },
    {
      username: 'Saiteja98',
      password: '*******',
      name: 'Sai',
      dob: new Date('1997-10-20'),
      address: 'Hyderabad',
      email: 'sai@gmail.com',
      gender: 'Male',
      language: '',
    },
    {
      username: 'Saiteja9',
      password: '*******',
      name: 'Saikiran',
      dob: new Date('1996-09-20'),
      address: 'Hyderabad',
      email: 'sai@gmail.com',
      gender: 'Male',
      language: '',
    },
  ];
  onGet() {
    return this.users;
  }
}
