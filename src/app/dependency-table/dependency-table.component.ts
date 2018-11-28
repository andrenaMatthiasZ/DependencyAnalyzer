import { Component, OnInit, OnDestroy } from '@angular/core';

import {DependencyService} from '../dependency.service'
import {Subscription} from 'rxjs'

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
    this.subscribeToDependencyService();
  }

  private subscribeToDependencyService() {
    this.subscription = this.dependencyService.getDependencies().subscribe(dependencies=> this.setDependencies(dependencies));
  }

  private setDependencies(dependencies: number[][]){
    this.rows = dependencies
    this.indices = Array.from(new Array(this.rows.length), (_val, index) => index + 1);
  }

  private subscription: Subscription;

  ngOnDestroy(){
    this.subscription.unsubscribe()
  }
}
