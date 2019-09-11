import { Component } from '@angular/core'

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})

export class ShoppingList {
  items = ['item1', 'item2', 'item3', 'item4']
}