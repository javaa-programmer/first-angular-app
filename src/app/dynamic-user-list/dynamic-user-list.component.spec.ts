import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DynamicUserListComponent } from './dynamic-user-list.component';

describe('DynamicUserListComponent', () => {
  let component: DynamicUserListComponent;
  let fixture: ComponentFixture<DynamicUserListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DynamicUserListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DynamicUserListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
