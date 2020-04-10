import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

//componentes
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { HomeFormComponent } from './components/home-form/home-form.component';
import { FormCompetitionComponent } from './components/form-competition/form-competition.component';
import { FormGroupComponent } from './components/form-group/form-group.component';
import { FormMatchComponent } from './components/form-match/form-match.component';
import { FormAddCompetitionComponent } from './components/form-add-competition/form-add-competition.component';
import { FormAddGroupComponent } from './components/form-add-group/form-add-group.component';
import { FormAddTeamComponent } from './components/form-add-team/form-add-team.component';
import { FormAddMatchComponent } from './components/form-add-match/form-add-match.component';
import { FormLoginComponent } from './components/form-login/form-login.component';

//Prime ng
import { InputTextModule } from 'primeng/inputtext';
//services
import { MatchesService } from './services/matches.service';
import { TeamsService } from './services/teams.service';
import { GroupsService } from './services/groups.service';
import { CompetitionService } from './services/competition.service';
import { ScoresheetService } from './services/scoresheet.service';
import { FormEventComponent } from './components/form-event/form-event.component';
import { FormAddEventComponent } from './components/form-add-event/form-add-event.component';

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    HomeFormComponent,
    FormCompetitionComponent,
    FormGroupComponent,
    FormMatchComponent,
    FormAddCompetitionComponent,
    FormAddGroupComponent,
    FormAddTeamComponent,
    FormAddMatchComponent,
    FormLoginComponent,
    FormEventComponent,
    FormAddEventComponent
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
    MatchesService,
    GroupsService,
    CompetitionService,
    ScoresheetService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
