import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageColDropzoneComponent } from './page-col-dropzone.component';

describe('PageColDropzoneComponent', () => {
  let component: PageColDropzoneComponent;
  let fixture: ComponentFixture<PageColDropzoneComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PageColDropzoneComponent]
    });
    fixture = TestBed.createComponent(PageColDropzoneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
