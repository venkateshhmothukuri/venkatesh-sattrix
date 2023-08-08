import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
@Component({
  selector: 'app-reglist',
  templateUrl: './reglist.component.html',
  styleUrls: ['./reglist.component.scss']
})
export class ReglistComponent implements OnInit {

 
  listForm!: FormGroup ;

  constructor(public router: Router) {}

  ngOnInit(): void {
      this.listForm = new FormGroup({
          name: new FormControl('', [Validators.required]),
          email: new FormControl('', [Validators.required, Validators.email]),
          phone: new FormControl('', [Validators.required]),
          city: new FormControl('', [Validators.required])
        });
  }

  onSubmit() {
    if(this.listForm.valid) {
      console.log(this._v());
      let retrievedData = sessionStorage.getItem("List");
      if(retrievedData){
          let list = JSON.parse(retrievedData);
          list.push(this._v());
          sessionStorage.setItem('List', JSON.stringify(list));
          this.router.navigate(['/list/list']);

      } else {
          sessionStorage.setItem('List', JSON.stringify([this._v()]));
          this.router.navigate(['/list/list']);
      }
    }
  }
  _v() {
    return this.listForm.value;
  }
}
