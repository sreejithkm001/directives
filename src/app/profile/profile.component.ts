import { Component } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
})
export class ProfileComponent {
  firstname = 'Sreejith ';
  secondname = 'K.M';
  title = '7356345991';
  myclass = 'red';
  status = 'error';
  public clickcount = 0;
  public text = '';
  public value = '';
  onSave() {
    this.clickcount = 24;
  }
  keyup(value: string) {
    this.text = value;
  }
  
}
