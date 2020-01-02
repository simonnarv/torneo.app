import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TournamentFixtureComponent } from './tournament-fixture.component';

describe('TournamentFixtureComponent', () => {
  let component: TournamentFixtureComponent;
  let fixture: ComponentFixture<TournamentFixtureComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TournamentFixtureComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TournamentFixtureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
