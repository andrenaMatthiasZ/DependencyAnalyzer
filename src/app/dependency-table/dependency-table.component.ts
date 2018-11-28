import { Component, OnInit } from '@angular/core';

import {DependencyService} from '../dependency.service'

@Component({
  selector: 'app-dependency-table',
  templateUrl: './dependency-table.component.html',
  styleUrls: ['./dependency-table.component.css']
})
export class DependencyTableComponent implements OnInit {

  constructor(private dependencyService: DependencyService) { }

  public indices: number[]

  public rows: number[][]


  ngOnInit() {
    this.getDependencies();
  }


  private getDependencies() {
    this.rows = this.dependencyService.getDependencies();
    this.indices = Array.from(new Array(this.rows.length), (_val, index) => index + 1);
  }
}
