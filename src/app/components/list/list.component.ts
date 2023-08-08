import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  listItems:any = [];
  constructor() { }

  ngOnInit(): void {
    let retrievedData = sessionStorage.getItem("List");
    if(retrievedData){
        this.listItems = JSON.parse(retrievedData);
    }
  }

  delete(index:any){
    this.listItems.splice(index, 1); 
    sessionStorage.setItem('List', JSON.stringify( this.listItems));
  }
}
