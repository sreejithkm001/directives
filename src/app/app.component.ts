import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'routing-demo';
  constructor(public router:Router){
  }

  studentclick(student:string){
    this.router.navigate(['student',student])
  }
}
