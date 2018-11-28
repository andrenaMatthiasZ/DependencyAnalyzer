import { Component, OnInit } from '@angular/core';

import {DependencyService} from '../dependency.service'

@Component({
  selector: 'app-dependency-table',
  templateUrl: './dependency-table.component.html',
  styleUrls: ['./dependency-table.component.css']
})
export class DependencyTableComponent implements OnInit {

  constructor(private dependencyService: DependencyService) { }

  public indices = [1,2,3]

  public rows


  ngOnInit() {
    this.rows = this.dependencyService.getDependencies()
  }

}
