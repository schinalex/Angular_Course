import { Component } from '@angular/core'

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})

export class RecipeList {
  items = ['recipe1', 'recipe2', 'recipe3', 'recipe4']
}