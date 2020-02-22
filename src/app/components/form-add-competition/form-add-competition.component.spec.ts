import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormAddCompetitionComponent } from './form-add-competition.component';

describe('FormAddCompetitionComponent', () => {
  let component: FormAddCompetitionComponent;
  let fixture: ComponentFixture<FormAddCompetitionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormAddCompetitionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormAddCompetitionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
