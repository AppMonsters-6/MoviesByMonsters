import { Component, OnInit } from '@angular/core';
import { FormControl, Validators, FormGroup } from '@angular/forms';
import { Admin } from '../model/admin';
import { AdminLoginServiceService } from '../services/admin-login-service.service';
import { AdminLogin } from '../model/admin-login';


@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.css']
})
export class AdminLoginComponent implements OnInit {
  adminEmailId!: string;
  public myForm!: FormGroup;
  adminPassword!: string;
  admin!: string;
  msg1: string = '';
  msg2: string = '';

  constructor(private adminLoginService: AdminLoginServiceService) {
    this.createForm();
  }

  ngOnInit(): void {
  }
  createForm() {
    this.myForm = new FormGroup({
      emailid: new FormControl(null, [Validators.required]),
      password: new FormControl(null, [Validators.required])
    })

  }
  getDetails() {
    this.msg1 = "";
    this.msg2 = "";
    if (this.myForm.valid) {
      this.adminLoginService.getAdminDetails(this.adminEmailId).subscribe((x) => {
        this.admin = x.text;
        if (this.admin === "NOT FOUND") {
          this.msg1 = '1234'; // to make it truthy
        }; if (this.admin == this.adminPassword) {
          this.msg2 = '12345'; // to make it truthy
        }; if (this.admin != this.adminPassword) {
          this.msg1 = '1234'; // to make it truthy
        };

      });
    }
    if(this.myForm.invalid) {
      alert("Fill all the columns!");
    }

  }




  get emailid() {
    return this.myForm.get("emailid")
  }
  get password() {
    return this.myForm.get("password");
  }
}