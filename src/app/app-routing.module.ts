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
import { FormEventComponent } from './components/form-event/form-event.component';
import { FormAddEventComponent } from './components/form-add-event/form-add-event.component';

//notas
/* 
-sacar lo de el deportivo porque ya esta incluido en  el dominio
-agregar una veriable url a evento para evitar usar la id, la url esta basada en el nombre del evento ej: morenitos->torneo-morenitos
-agregar al servicio evento buscar evento por url 
-agregamos oninit de competencias guardamos el evento buscando por url en localstorage
-agregar a evento tanto en front como back, las variables url, texto de home page y noticias.
*/


const routes: Routes = [
  /*{
    path: '',
    redirectTo: '',
    pathMatch: 'full'
  },*/
  {
    path: '',
    component: FormEventComponent // el deportivo pagina principal
  },
  {
    path:'add/event', //derberia tener userId algo como :user/add/event
    component: FormAddEventComponent
  },
  {
    path: ':eventUrl/home', //evento_url home 
    component: HomeFormComponent
  },
  {
    path: ':eventUrl', //evento competencias
    component: FormCompetitionComponent
  },
  {
    path: ':eventUrl/competition/:competitionId/groups', //evento competencias --> grupos
    component: FormGroupComponent
  },
  {
    path: ':eventUrl/matches', 
    component: FormMatchComponent
  },
  {
    path: ':eventUrl/competition/:competitionId/group/:groupId/matches',//evento competencias --> grupos --> matches
    component: FormMatchComponent
  },
  {//editar un grupo
    path: ':eventUrl/competition/:competitionId/group/:groupId/edit',
    component: FormAddGroupComponent
  },
  {//no se usa
    path: ':eventUrl/competition/:competitionId/add/group',
    component: FormAddGroupComponent
  },
  {//no se usa
    path: ':eventUrl/add/team',
    component: FormAddTeamComponent
  },
  {
    path: ':eventUrl/competition/:competitionId/add/matches',
    component: FormAddMatchComponent
  },
  {
    path: ':eventUrl/competition/:competitionId/group/:groupId/matches/:matchId/edit',
    component: FormAddMatchComponent
  },
  {
    path: 'login',
    component: FormLoginComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
