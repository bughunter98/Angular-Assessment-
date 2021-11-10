import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user.model';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit {

  users:User[]=[];
  date1:Date = new Date("2015-03-25");
  date2:Date = new Date("2014-06-25");
  constructor(private userService:UserService) {
      this.users=userService.getUserService();
      console.log(this.users)
      console.log(this.date1);
      console.log(this.date1>this.date2);
   }

  ngOnInit(): void {
     this.users=this.userService.onGet();
  }
  len!:Number;
  onDelete(val:string){
    this.len=this.users.length;
    for(let i=0;i<this.len;i++)
    {
      if(this.users[i].username==val)
      {
        this.users.splice(i,1);
        alert("Data Deleted Successfully");
        return ;
      }
      
    }
  }

}
