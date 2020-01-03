import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TeamListComponent } from './components/team-list/team-list.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { TeamFormComponent } from './components/team-form/team-form.component';
import { TournamentBracketComponent} from './components/tournament-bracket/tournament-bracket.component';

import { TeamsService } from './services/teams.service';
import { TournamentLeagueComponent } from './components/tournament-league/tournament-league.component';
import { TournamentFixtureComponent } from './components/tournament-fixture/tournament-fixture.component';
import { MyTeamsListComponent } from './components/my-teams-list/my-teams-list.component';
import { HomeFormComponent } from './components/home-form/home-form.component';


@NgModule({
  declarations: [
    AppComponent,
    TeamListComponent,
    NavigationComponent,
    TeamFormComponent,
    TournamentBracketComponent,
    TournamentLeagueComponent,
    TournamentFixtureComponent,
    MyTeamsListComponent,
    HomeFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [
    TeamsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
