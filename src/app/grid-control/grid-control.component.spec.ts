import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GridControlComponent } from './grid-control.component';

describe('GridControlComponent', () => {
  let component: GridControlComponent;
  let fixture: ComponentFixture<GridControlComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GridControlComponent]
    });
    fixture = TestBed.createComponent(GridControlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
