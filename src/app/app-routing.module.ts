import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TeamFormComponent } from './components/team-form/team-form.component';
import { MyTeamsListComponent } from './components/my-teams-list/my-teams-list.component';
import { HomeFormComponent } from './components/home-form/home-form.component';
import { FixtureFormComponent } from './components/fixture-form/fixture-form.component';
import { RegisterUserComponent } from './components/register-user/register-user.component';
import { LoginUserComponent } from './components/login-user/login-user.component';
import { CreateTournamentComponent } from './components/create-tournament/create-tournament.component';
import { FormCategoryComponent } from './components/form-category/form-category.component';
import { FormFilterComponent } from './components/form-filter/form-filter.component';
import { FormFixtureComponent } from './components/form-fixture/form-fixture.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/teams',
    pathMatch: 'full'
  },
  {
    path: 'teams',
    component: HomeFormComponent
  },
  {
    path: 'teams/add',//sin implementar
    component: TeamFormComponent
  },
  {
    path: 'teams/edit/:id',//sin implementar
    component: TeamFormComponent
  },
  {
    path: 'teams/allTeams',
    component: MyTeamsListComponent
  },
  {
    path: 'teams/edit/:id',
    component: MyTeamsListComponent
  },
  {
    path: 'teams/fixtures',
    component: FixtureFormComponent
  },
  {
    path: 'teams/user/register',
    component: RegisterUserComponent
  },
  {
    path: 'teams/user/LogIn',
    component: LoginUserComponent
  },
  {
    path: 'teams/tournament',
    component: CreateTournamentComponent
  },
  {
    path: 'futbol/category',
    component: FormCategoryComponent
  },
  {
    path: 'futbol/filter/:id',
    component: FormFilterComponent
  },
  {
    path: 'futbol/fixture',
    component: FormFixtureComponent
  },
  {
    path: 'futbol/fixture/:id',
    component: FormFixtureComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
