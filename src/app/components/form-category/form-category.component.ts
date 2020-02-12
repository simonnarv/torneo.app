import { Component, OnInit } from '@angular/core';

import { Category } from 'src/app/models/Category';
import { CategoryService } from '../../services/category.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Tournament } from 'src/app/models/Tournament';

@Component({
  selector: 'app-form-category',
  templateUrl: './form-category.component.html',
  styleUrls: ['./form-category.component.css']
})
export class FormCategoryComponent implements OnInit {

  categories;

  constructor(private categoryService: CategoryService,
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
          console.log(categories)
        });
  }

  hasAdminPermission() {
    return true;
  }

  delete(id: number) {
    this.categoryService.delete(id).subscribe(
      res =>{
        this.getCategories();
      }
    );
  }

}
