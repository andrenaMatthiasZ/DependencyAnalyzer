import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DependencyTableComponent } from './dependency-table/dependency-table.component';
import { DependencyTableRowComponent } from './dependency-table-row/dependency-table-row.component';

@NgModule({
  declarations: [
    AppComponent,
    DependencyTableComponent,
    DependencyTableRowComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
