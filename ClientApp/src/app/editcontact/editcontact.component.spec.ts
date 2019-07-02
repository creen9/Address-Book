import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditcontactComponent } from './editcontact.component';

describe('EditcontactComponent', () => {
  let component: EditcontactComponent;
  let fixture: ComponentFixture<EditcontactComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditcontactComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditcontactComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
