import { Component, OnInit } from '@angular/core';
import { UserService}  from '../../shared/user.service';
import {User} from '../../user'
import{Router}  from '@angular/router';


@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
  
  private users: User[];
  constructor(private _userService: UserService, private _router:Router) { }

  ngOnInit() {
   
    this._userService.getUsers().subscribe((users)=>{
      console.log(users);
      this.users = users;
      //this.users=users;
    },(error)=>{
      console.log(error);
    })
    
  }

  deleteUser(user){
  this._userService.deleteUser(user.id).subscribe((data) => {
    this.users.splice(this.users.indexOf(user),1);
  },(error) =>{
    console.log(error);
  })
  
}

updateUser(user){  
  this._userService.setter(user);
  this._router.navigate(['/uform']);

}

newUser(){
  let user = new User();
  this._userService.setter(user);
  this._router.navigate(['/uform']);
  
  }

}
