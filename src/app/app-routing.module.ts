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
    redirectTo: 'losmorenitos/home',
    pathMatch: 'full'
  },
  {
    path: 'lomorenitos/home',
    component: HomeFormComponent
  },
  {
    path: 'losmorenitos/competition',
    component: FormCompetitionComponent
  },
  {
    path: 'losmorenitos/competition/:id/groups',
    component: FormGroupComponent
  },
  {
    path: 'losmorenitos/matches',
    component: FormMatchComponent
  },
  {
    path: 'losmorenitos/competition/:competitionId/group/:id/matches',
    component: FormMatchComponent
  },
  {//no se usa
    path: 'losmorenitos/add/competition',
    component: FormAddCompetitionComponent
  },
  {//no se usa
    path: 'losmorenitos/add/competition/:id',
    component: FormAddCompetitionComponent
  },
  {//editar un grupo
    path: 'losmorenitos/competition/:competitionId/group/:id/edit',
    component: FormAddGroupComponent
  },
  {//no se usa
    path: 'losmorenitos/competition/:competitionId/add/group',
    component: FormAddGroupComponent
  },
  {//no se usa
    path: 'losmorenitos/add/team',
    component: FormAddTeamComponent
  },
  {
    path: 'losmorenitos/competition/:competitionId/add/matches',
    component: FormAddMatchComponent
  },
  {
    path: 'losmorenitos/competition/:competitionId/group/:id/matches/:matchId/edit',
    component: FormAddMatchComponent
  },
  {
    path: 'losmorenitos/login',
    component: FormLoginComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
