import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm!: FormGroup;

  constructor(public router: Router) {}


  ngOnInit(): void {
    this.loginForm = new FormGroup({
      username: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required])
    });
  }

  onSubmit() {
    if(this.loginForm.valid) {
      console.log(this._v());
      this.finduserDetails();
    }
  }

  finduserDetails(){
    let retrievedData = sessionStorage.getItem("usersList");
    if(retrievedData){
      let userList =  JSON.parse(retrievedData  );
      userList.forEach((element:any) => {
        if(this.loginForm.value.username == element.username) {
          if(this.loginForm.value.password == element.password) {
            sessionStorage.setItem('islogin', JSON.stringify(true));
            this.router.navigate(['list']);
          } else {
            alert('wrong password');
          }
        } else {
          alert('user not found');
        }
      });
    }

  }

  _v() {
    return this.loginForm.value;
  }

}
