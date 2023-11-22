import { Component } from '@angular/core';

@Component({
  selector: 'app-directive-table',
  templateUrl: './directive-table.component.html',
  styleUrls: ['./directive-table.component.scss']
})
export class DirectiveTableComponent {
  showTable: boolean = false;
  applyStyle: boolean = false;

  toggleTable() {
    this.showTable = !this.showTable;
  }
  toggleStyle() {
    this.applyStyle = !this.applyStyle;
  }
}
