import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

//componentes
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { HomeFormComponent } from './components/home-form/home-form.component';
import { FormCategoryComponent } from './components/form-category/form-category.component';
import { FormGroupComponent } from './components/form-group/form-group.component';
import { FormFixtureComponent } from './components/form-fixture/form-fixture.component';
import { FormAddCategoryComponent } from './components/form-add-category/form-add-category.component';
import { FormAddGroupComponent } from './components/form-add-group/form-add-group.component';
import { FormAddTeamComponent } from './components/form-add-team/form-add-team.component';
import { FormAddMatchComponent } from './components/form-add-match/form-add-match.component';

//Prime ng
import { InputTextModule } from 'primeng/inputtext';
//services
import { TournamentsService } from './services/tournaments.service';
import { MatchesService } from './services/matches.service';
import { TeamsService } from './services/teams.service';
import { GroupsService } from './services/groups.service';
import { CategoryService } from './services/category.service';
import { ScoresheetService } from './services/scoresheet.service';
import { FormLoginComponent } from './components/form-login/form-login.component';


@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    HomeFormComponent,
    FormCategoryComponent,
    FormGroupComponent,
    FormFixtureComponent,
    FormAddCategoryComponent,
    FormAddGroupComponent,
    FormAddTeamComponent,
    FormAddMatchComponent,
    FormLoginComponent
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
    GroupsService,
    CategoryService,
    ScoresheetService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
