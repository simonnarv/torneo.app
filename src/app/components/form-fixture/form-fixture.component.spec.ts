import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormFixtureComponent } from './form-fixture.component';

describe('FormFixtureComponent', () => {
  let component: FormFixtureComponent;
  let fixture: ComponentFixture<FormFixtureComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormFixtureComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormFixtureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
