import { Injectable } from "@angular/core";
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: "root"
})
export class DependencyService {
  constructor() {}

  getDependencies(): Observable<number[][]> {
    return of([[1, 2, 3], [4, 5, 6], [7, 8, 8]]);
  }
}
