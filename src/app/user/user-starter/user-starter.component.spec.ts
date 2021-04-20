import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserStarterComponent } from './user-starter.component';

describe('UserStarterComponent', () => {
  let component: UserStarterComponent;
  let fixture: ComponentFixture<UserStarterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserStarterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserStarterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
