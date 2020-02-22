import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeFormComponent } from './components/home-form/home-form.component';
import { FormCompetitionComponent } from './components/form-competition/form-competition.component';
import { FormGroupComponent } from './components/form-group/form-group.component';
import { FormMatchComponent } from './components/form-match/form-match.component';
import { FormAddCompetitionComponent } from './components/form-add-competition/form-add-competition.component';
import { FormAddGroupComponent } from './components/form-add-group/form-add-group.component';
import { FormAddTeamComponent } from './components/form-add-team/form-add-team.component';
import { FormLoginComponent } from './components/form-login/form-login.component';
import { FormAddMatchComponent } from './components/form-add-match/form-add-match.component';

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
    path: 'futbol/competition',
    component: FormCompetitionComponent
  },
  {
    path: 'futbol/competition/:id/groups',
    component: FormGroupComponent
  },
  {
    path: 'futbol/matches',
    component: FormMatchComponent
  },
  {
    path: 'futbol/matches/:id',
    component: FormMatchComponent
  },
  {
    path: 'futbol/add/competition',
    component: FormAddCompetitionComponent
  },
  {
    path: 'futbol/add/competition/:id',
    component: FormAddCompetitionComponent
  },
  {
    path: 'futbol/group/:id/edit',
    component: FormAddGroupComponent
  },
  {
    path: 'futbol/competition/:competitionId/add/group',
    component: FormAddGroupComponent
  },
  {
    path: 'futbol/add/team',
    component: FormAddTeamComponent
  },
  {
    path: 'futbol/competition/:competitionId/group/:id/add/match',
    component: FormAddMatchComponent
  },
  {
    path: 'futbol/login',
    component: FormLoginComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
