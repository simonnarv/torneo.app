import { Component, OnInit } from '@angular/core';

import { Category } from 'src/app/models/category';
import { CategoryService } from '../../services/category.service';
import { Router } from '@angular/router';
import { LoginService } from '../../services/login.service';
import { FormsModule } from '@angular/forms';
import { Team } from 'src/app/models/team';
import { TeamsService } from 'src/app/services/teams.service';

@Component({
  selector: 'app-form-category',
  templateUrl: './form-category.component.html',
  styleUrls: ['./form-category.component.css']
})
export class FormCategoryComponent implements OnInit {

  categories;

  categ: Category = {
    name: "",
  }

  team: Team = {
    name: "",
    description: ""
  }

  //variable button toggle
  Show: string = 'Show';
  Hide: string = 'Hide';
  btnText: string = this.Show;


  constructor(private teamService: TeamsService,
    private categoryService: CategoryService,
    private loginService: LoginService,
    private router: Router) { }

  ngOnInit() {
    this.getCategories();
  }

  //toggle button method
  toggle(): void {
    if (this.btnText === this.Show) {
      this.btnText = this.Hide;
    } else {
      this.btnText = this.Show;
    }
  }

  getCategories() {
    this.categoryService.getAll()
      .subscribe(
        (categories: Category[]) => {
          this.categories = categories;
        });
  }

  hasAdminPermission() {
    return this.loginService.isAdmin();
  }

  /*
  saveCategory() {
    !this.categ.id
      ? this.categoryService.create(this.categ).subscribe(
        res => {
          this.getCategories();
        }
      )
      : this.categoryService.update(this.categ.id, this.categ).subscribe(
        res => {
          this.getCategories();
        });
  };*/

  saveCategory() {
    this.categoryService.create(this.categ).subscribe(
      res => {
        this.getCategories();
      }
    )
  };

  updateCategory(id: number) {
    this.categoryService.update(id, this.categ).subscribe(
      res => {
        this.getCategories();
      });
  };


  saveTeam() {
    !this.team.id
      ? this.teamService.create(this.team).subscribe()
      : this.teamService.update(this.team.id, this.team).subscribe();
  }


  delete(id: number) {
    this.categoryService.delete(id).subscribe(
      res => {
        this.getCategories();
      }
    );
  }

}
