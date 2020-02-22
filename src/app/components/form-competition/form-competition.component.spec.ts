import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormCompetitionComponent } from './form-competition.component';

describe('FormCompetitionComponent', () => {
  let component: FormCompetitionComponent;
  let fixture: ComponentFixture<FormCompetitionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormCompetitionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormCompetitionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
