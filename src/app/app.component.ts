import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  //template: '{{name}}',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'firstAngularProject';
  name = 'pooja';
  userplaceholder:string='Username from ts file';
  passwordplaceholder:string;
  constructor(){
this.passwordplaceholder='Password from ts file';
  }

}
