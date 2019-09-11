import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe('Chopped Salad', 'Quick basic chopped salad', 'https://www.tablefortwoblog.com/wp-content/uploads/2018/05/quick-chopped-salad-recipe-photos-tablefortwoblog-3.jpg')
  ];

  constructor() { }

  ngOnInit() {
  }

}
