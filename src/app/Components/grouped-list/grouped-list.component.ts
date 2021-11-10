import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user.model';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-grouped-list',
  templateUrl: './grouped-list.component.html',
  styleUrls: ['./grouped-list.component.scss']
})
export class GroupedListComponent implements OnInit {
  findUserName!:string;
  findName:User[] =[];
  
  users:User[]=[];
  flag:number=0;
  constructor(private userService:UserService) {
    this.users=userService.getUserService();
   }
   len!:number;
   user:User= new User;
   searchByUserName(){
     this.len=this.users.length;
     for(let i=0;i<this.len;i++)
     {
        if(this.findUserName==this.users[i].username){
          this.flag=1;
          this.user=this.users[i];
          alert("Fetching Data");
          return;
        }
     }
     alert("User Name Not Found");
     
   }
   searchByName(){
     this.len=this.users.length;
     this.findName=[];
     for(let i=0;i<this.len;i++)
     {
        if(this.findUserName==this.users[i].name){
          this.flag=2;
          this.findName.push(this.users[i]);
        }
     }
     if(this.findName.length==0){
       alert("No User Record found");
       this.flag=0;
     }
     else{
        alert("Fetching Data...");
     }


   }
   d1:Date=new Date;
   d2:Date=new Date;
   filterByDate(){
     console.log(this.users)
    //  let len = this.users.length;
    // for (let i = 0; i < len; i++) {
    //     for (let j = 0; j < len-i-1; j++) {
    //       this.d1=this.users[j].dob;
    //       this.d2=this.users[j+1].dob;

    //         if (this.d1> this.d2) {
    //             let tmp = this.users[j];
    //             this.users[j] = this.users[j + 1];
    //             this.users[j + 1] = tmp;
    //         }
    //     }
    // }
    this.users=this.users.sort(function(a,b){
      if(a.dob>b.dob) return 1;
      else if(a.dob<b.dob) return -1;
      else return 0;
    })
    console.log(this.users);
    return this.users;
      
    

   }


  ngOnInit(): void {
    
  }

}
