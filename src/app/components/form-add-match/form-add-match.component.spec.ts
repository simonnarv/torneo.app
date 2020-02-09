import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormAddMatchComponent } from './form-add-match.component';

describe('FormAddMatchComponent', () => {
  let component: FormAddMatchComponent;
  let fixture: ComponentFixture<FormAddMatchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormAddMatchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormAddMatchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
