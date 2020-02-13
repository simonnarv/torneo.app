import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeFormComponent } from './components/home-form/home-form.component';
import { FormCategoryComponent } from './components/form-category/form-category.component';
import { FormGroupComponent } from './components/form-group/form-group.component';
import { FormFixtureComponent } from './components/form-fixture/form-fixture.component';
import { FormAddCategoryComponent } from './components/form-add-category/form-add-category.component';
import { FormAddGroupComponent } from './components/form-add-group/form-add-group.component';
import { FormAddTeamComponent } from './components/form-add-team/form-add-team.component';
import { FormLoginComponent } from './components/form-login/form-login.component';

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
    path: 'futbol/category',
    component: FormCategoryComponent
  },
  {
    path: 'futbol/group/:id',
    component: FormGroupComponent
  },
  {
    path: 'futbol/fixture',
    component: FormFixtureComponent
  },
  {
    path: 'futbol/fixture/:id',
    component: FormFixtureComponent
  },
  {
    path: 'futbol/add/category',
    component: FormAddCategoryComponent
  },
  {
    path: 'futbol/add/category/:id',
    component: FormAddCategoryComponent
  },
  {
    path: 'futbol/category/:competitionId/add/group',
    component: FormAddGroupComponent
  },
  {
    path: 'futbol/add/team',
    component: FormAddTeamComponent
  },
  {
    path: 'futbol/competition/:competitionId/group/:id/add/match',
    component: FormAddTeamComponent
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
