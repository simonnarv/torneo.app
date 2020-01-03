import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TeamListComponent } from './components/team-list/team-list.component';
import { TeamFormComponent } from './components/team-form/team-form.component';
import { MyTeamsListComponent } from './components/my-teams-list/my-teams-list.component';
import { HomeFormComponent } from './components/home-form/home-form.component';

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
    path: 'teams/add',
    component: TeamFormComponent
  },
  {
    path: 'teams/edit/:id',
    component: TeamFormComponent
  },
  {
    path: 'teams/allTeams',
    component: MyTeamsListComponent
  },{
    path: 'teams/edit/:id',
    component: MyTeamsListComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
