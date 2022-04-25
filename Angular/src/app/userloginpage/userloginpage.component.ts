import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormControl } from '@angular/forms';
import { Validators } from '@angular/forms';
import { Users } from '../model/users';
import { UserloginService } from '../services/userlogin.service';
@Component({
  selector: 'app-userloginpage',
  templateUrl: './userloginpage.component.html',
  styleUrls: ['./userloginpage.component.css']
})
export class UserloginpageComponent implements OnInit {

  userEmailId!: string;
  userpassword!: string;
  public myForm!: FormGroup;
  msg1: string = '';
  msg2: string = '';
  user!: string;


  constructor(private userLoginService: UserloginService) {
    this.createForm()
  }

  ngOnInit(): void {
  }
  getDetails() {
    this.msg1 = "";
    this.msg2 = "";
    if (this.myForm.valid) {
      this.userLoginService.getUserDetails(this.userEmailId).subscribe((x) => {
        this.user = x.text;
        if (this.user === "NOT FOUND") {
          this.msg2 = '1234';
          console.log("The user does not exist.");
        }
        ; if (this.user === this.userpassword) {
          this.msg1 = '12345';
        }; if (this.user != this.userpassword) {
          this.msg2 = '1234';
        };
      });
    }
    if (this.myForm.invalid) {
      alert("Fill All The Coloumns To Login");
    }

  }
  createForm() {
    this.myForm = new FormGroup({
      emailid: new FormControl(null, [Validators.required]),
      fpassword: new FormControl(null, [Validators.required])

    });
  }
  get emailid() {
    return this.myForm.get('emailid');

  }
  get fpassword() {
    return this.myForm.get('fpassword');
  }

}

