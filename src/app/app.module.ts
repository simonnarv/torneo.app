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
import { FormFilterComponent } from './components/form-filter/form-filter.component';
import { FormFixtureComponent } from './components/form-fixture/form-fixture.component';

//Prime ng
import { InputTextModule } from 'primeng/inputtext';
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
    NavigationComponent,
    HomeFormComponent,
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
