import { Component, createPlatform, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Admin } from 'src/app/model/admin';
import { AdminLogin } from 'src/app/model/admin-login';
import { AdminInsertService } from 'src/app/services/admin-insert.service';

@Component({
  selector: 'app-admininsert',
  templateUrl: './admininsert.component.html',
  styleUrls: ['./admininsert.component.css']
})
export class AdmininsertComponent implements OnInit {
  adminsName!: string;
  adminAge!: number;
  adminMobileNumber!: number;
  adminEmail!: string;
  adminPassword!: string;
  admin!: Admin;
  public myForm!: FormGroup
  adminLogin!: AdminLogin;
  isConfirmed: Boolean = false;

  constructor(private service: AdminInsertService) {
    this.createForm()
  }
  createForm() {
    this.myForm = new FormGroup({
      name: new FormControl(null, [Validators.required]),
      age: new FormControl(null, [Validators.required]),
      phoneNumber: new FormControl(null, [Validators.required]),
      emailId: new FormControl(null, [Validators.required]),
      password: new FormControl(null, [Validators.required])


    })
  }
  ngOnInit(): void {
  }
  Register() {
    if (this.myForm.valid) {
      this.adminLogin = new AdminLogin(this.emailId?.value, this.password?.value);
      this.admin = new Admin(this.name?.value, this.age?.value, this.phoneNumber?.value, this.adminLogin);
      this.service.addAdmin(this.admin).subscribe((x) => { console.log(x) });
      console.log(`Admin Name ${this.name?.value} Admin Email ${this.emailId?.value} Admin age ${this.age?.value} Admin Number ${this.phoneNumber?.value} Admin password ${this.password?.value}`)
      alert("Data Submitted");
    }
    if (this.myForm.invalid) {
      alert("Fill all the columns!")
    }

  }
  // toggleConfirmed(){
  //   if(this.myForm.valid){
  //     this.isConfirmed=!this.isConfirmed;
  //   }
  //   if(this.myForm.invalid){
  //     this.isConfirmed=false;
  //   }
  // }
  get emailId() {
    return this.myForm.get('emailId')
  }
  get phoneNumber() {
    return this.myForm.get('phoneNumber')
  }
  get age() {
    return this.myForm.get('age')
  }
  get name() {
    return this.myForm.get('name')
  }
  get password() {
    return this.myForm.get('password')
  }
}
