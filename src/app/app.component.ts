import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'SATTRIX';

  logout(){
    sessionStorage.setItem('islogin', JSON.stringify(false));
  }
}
