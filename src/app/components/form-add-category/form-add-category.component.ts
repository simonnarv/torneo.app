import { Component, OnInit } from '@angular/core';
import { Category } from 'src/app/models/Category';
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
    private router: Router) { }

  ngOnInit() {

  }

  save() {
    this.categoryService.save(this.category).subscribe();
  }

}
