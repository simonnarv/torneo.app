import { Component, OnInit } from '@angular/core';
import { Category } from 'src/app/models/category';
import { CategoryService } from '../../services/category.service';
import { Router, ActivatedRoute } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-form-add-category',
  templateUrl: './form-add-category.component.html',
  styleUrls: ['./form-add-category.component.css']
})
export class FormAddCategoryComponent implements OnInit {

  category: Category = {
    name:""
  }

  constructor(private categoryService: CategoryService,
    private actRoute: ActivatedRoute,
    private router: Router) { }

  ngOnInit() {
   var categoryId = this.actRoute.snapshot.params.id;

   if (categoryId) {
     // EDIT
    this.getCategory(categoryId);
   }
  };

  save() {
    !this.category.id
      ? this.categoryService.create(this.category).subscribe(
        res=>{
          this.router.navigate(['futbol/category']);
        }
      )
      : this.categoryService.update(this.category.id, this.category).subscribe(  
        res=>{
        this.router.navigate(['futbol/category']);
      });
  };

  private getCategory(categoryId: number) {
    this.categoryService.getById(categoryId).subscribe(
      (category : Category) => { this.category = category }
      );
  };
}
