import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss'],
})
export class TableComponent implements OnInit {
  @Input() applyStyle: boolean = false;
  data: any[] = [];

  ngOnInit() {
    setTimeout(() => {
      this.data = [
        { name: 'John ', age: 25, city: 'Thrissur' },
        { name: 'Jane', age: 30, city: 'Palakkad' },
        { name: 'James', age: 22, city: 'Kochi' },
      ];
    },2);
  }
}
