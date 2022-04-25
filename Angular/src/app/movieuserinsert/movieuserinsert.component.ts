import { Component, OnInit } from '@angular/core';
import { UserLogin } from '../model/user-login';
import { Users } from '../model/users';
import { UserinsertService } from '../services/userinsert.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-movieuserinsert',
  templateUrl: './movieuserinsert.component.html',
  styleUrls: ['./movieuserinsert.component.css']
})
export class MovieuserinsertComponent implements OnInit {
  user!:Users;;
  usersLogin!:UserLogin;
  userName!:string;
  userPhoneNumber!:number;
  userEmailId!:string;
  userDateOfBirth!:string;
  userPassword!:string;
  public myForm!:FormGroup;

  constructor(private userInsertService:UserinsertService) { 
    this.createForm()
  }

  ngOnInit(): void {
  }
  Register(){
    if (this.myForm.valid){
    this.usersLogin=new UserLogin(this.userEmailId,this.userPassword);
  this.user = new Users( this.userName,this.userPhoneNumber,this.userDateOfBirth,this.usersLogin);
    this. userInsertService.addUser(this.user).subscribe((x)=>{console.log(x)});
    alert("Data Submitted");
    }
    if(this.myForm.invalid){
      alert("Please Fill All The Columns To Submit");
    }
  }
  createForm(){
    this.myForm= new FormGroup({
      name:new FormControl(null,[Validators.required]),
      emailid:new FormControl(null,[Validators.required]),
      phonenumber:new FormControl(null,[Validators.required]),
      dateofbirth:new FormControl(null,[Validators.required]),
      passwords:new FormControl(null,[Validators.required])
 
 
    })
  }
    
  
  get emailid(){
    return this.myForm.get('emailid')
  }
  get phonenumber(){
    return this.myForm.get('phonenumber')
  }
  get dateofbirth(){
    return this.myForm.get('dateofbirth')
  }
  get name(){
    return this.myForm.get('name')
  }
  get passwords(){
    return this.myForm.get('passwords')
  }
}
