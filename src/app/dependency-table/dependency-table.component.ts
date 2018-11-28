import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dependency-table',
  templateUrl: './dependency-table.component.html',
  styleUrls: ['./dependency-table.component.css']
})
export class DependencyTableComponent implements OnInit {

  constructor() { }

  public indices = [1,2,3]

  public rows = [[1,2,3],[4,5,6],[7,8,8]]


  ngOnInit() {
  }

}
