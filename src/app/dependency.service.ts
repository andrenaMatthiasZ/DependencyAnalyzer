import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root"
})
export class DependencyService {
  constructor() {}

  getDependencies(): number[][] {
    return [[1, 2, 3], [4, 5, 6], [7, 8, 8]];
  }
}
