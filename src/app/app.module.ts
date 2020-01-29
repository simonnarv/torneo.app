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
import { FormCategoryComponent } from './components/form-category/form-category.component';
import { FormFilterComponent } from './components/form-filter/form-filter.component';
import { FormFixtureComponent } from './components/form-fixture/form-fixture.component';

//Prime ng
import { InputTextModule } from 'primeng/inputtext';
import { LoginUserComponent } from './components/login-user/login-user.component';
import { CreateTournamentComponent } from './components/create-tournament/create-tournament.component';
//services
import { TournamentsService } from './services/tournaments.service';
import { MatchesService } from './services/matches.service';
import { TeamsService } from './services/teams.service';
import { TeamGroupsService } from './services/team-groups.service';
import { CategoryService } from './services/category.service';
import { ScoresheetService } from './services/scoresheet.service';


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
    CreateTournamentComponent,
    FormCategoryComponent,
    FormFilterComponent,
    FormFixtureComponent
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
    TeamGroupsService,
    CategoryService,
    ScoresheetService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
