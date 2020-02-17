import { Component, OnInit } from '@angular/core';

import { Category } from 'src/app/models/category';
import { CategoryService } from '../../services/category.service';
import { Router } from '@angular/router';
import { LoginService } from '../../services/login.service';

@Component({
  selector: 'app-form-category',
  templateUrl: './form-category.component.html',
  styleUrls: ['./form-category.component.css']
})
export class FormCategoryComponent implements OnInit {

  categories;

  constructor(private categoryService: CategoryService,
              private loginService: LoginService,
              private router: Router) { }

  ngOnInit() {
    this.getCategories();
  }

  //lista de categories
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

  delete(id: number) {
    this.categoryService.delete(id).subscribe(
      res =>{
        this.getCategories();
      }
    );
  }

}
