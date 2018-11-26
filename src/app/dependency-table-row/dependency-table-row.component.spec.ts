import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DependencyTableRowComponent } from './dependency-table-row.component';

describe('DependencyTableRowComponent', () => {
  let component: DependencyTableRowComponent;
  let fixture: ComponentFixture<DependencyTableRowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DependencyTableRowComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DependencyTableRowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
