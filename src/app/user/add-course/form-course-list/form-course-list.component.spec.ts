import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormCourseListComponent } from './form-course-list.component';

describe('FormCourseListComponent', () => {
  let component: FormCourseListComponent;
  let fixture: ComponentFixture<FormCourseListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormCourseListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormCourseListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
