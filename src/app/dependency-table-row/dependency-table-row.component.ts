import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: '[app-dependency-table-row]',
  templateUrl: './dependency-table-row.component.html',
  styleUrls: ['./dependency-table-row.component.css']
})
export class DependencyTableRowComponent implements OnInit {

  constructor() { }

  @Input() index: number

  @Input() grow : any[]

  ngOnInit() {
  }

}
