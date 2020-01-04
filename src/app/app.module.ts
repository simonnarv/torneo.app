import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TeamListComponent } from './components/team-list/team-list.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { TeamFormComponent } from './components/team-form/team-form.component';

import { TournamentLeagueComponent } from './components/tournament-league/tournament-league.component';
import { MyTeamsListComponent } from './components/my-teams-list/my-teams-list.component';
import { HomeFormComponent } from './components/home-form/home-form.component';
import { RegisterUserComponent } from './components/register-user/register-user.component';
import { FixtureFormComponent } from './components/fixture-form/fixture-form.component';

//Prime ng
import {InputTextModule} from 'primeng/inputtext';
import { LoginUserComponent } from './components/login-user/login-user.component';
import { CreateTournamentComponent } from './components/create-tournament/create-tournament.component';
//services
import {TournamentsService} from './services/tournaments.service';
import {MatchesService} from './services/matches.service';
import { TeamsService } from './services/teams.service';
import {TeamGroupsService} from './services/team-groups.service';


@NgModule({
  declarations: [
    AppComponent,
    TeamListComponent,
    NavigationComponent,
    TeamFormComponent,
    TournamentLeagueComponent,
    MyTeamsListComponent,
    HomeFormComponent,
    RegisterUserComponent,
    FixtureFormComponent,
    LoginUserComponent,
    CreateTournamentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    InputTextModule
  ],
  providers: [
    TeamsService,
    TournamentsService,
    MatchesService,
    TeamGroupsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
