import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddcontactComponent } from './addcontact.component';

describe('AddcontactComponent', () => {
  let component: AddcontactComponent;
  let fixture: ComponentFixture<AddcontactComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddcontactComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddcontactComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
