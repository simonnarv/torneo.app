import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TournamentLeagueComponent } from './tournament-league.component';

describe('TournamentLeagueComponent', () => {
  let component: TournamentLeagueComponent;
  let fixture: ComponentFixture<TournamentLeagueComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TournamentLeagueComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TournamentLeagueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
