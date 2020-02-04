import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeFormComponent } from './components/home-form/home-form.component';
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
