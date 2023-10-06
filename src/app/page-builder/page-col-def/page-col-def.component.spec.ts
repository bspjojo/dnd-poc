import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageColDefComponent } from './page-col-def.component';

describe('PageColDefComponent', () => {
  let component: PageColDefComponent;
  let fixture: ComponentFixture<PageColDefComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PageColDefComponent]
    });
    fixture = TestBed.createComponent(PageColDefComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
