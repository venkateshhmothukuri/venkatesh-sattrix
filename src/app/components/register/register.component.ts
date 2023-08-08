import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

    registerForm!: FormGroup ;

    constructor(public router: Router) {}
  
    ngOnInit(): void {
        this.registerForm = new FormGroup({
            username: new FormControl('', [Validators.required]),
            email: new FormControl('', [Validators.required, Validators.email]),
            password: new FormControl('', [Validators.required]),
            confirmPassword: new FormControl('', [Validators.required])
          });
    }
  
    onSubmit() {
      if(this.registerForm.valid) {
        console.log(this._v());
        let retrievedData = sessionStorage.getItem("usersList");
        if(retrievedData){
            let list = JSON.parse(retrievedData);
            list.push(this._v());
            sessionStorage.setItem('usersList', JSON.stringify(list));
            this.router.navigate(['login']);

        } else {
            sessionStorage.setItem('usersList', JSON.stringify([this._v()]));
            this.router.navigate(['login']);
        }
      }
    }
    _v() {
      return this.registerForm.value;
    }
}
