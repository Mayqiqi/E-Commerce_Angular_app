import {Component, OnInit} from '@angular/core';
import {Recipe} from "../recipe.model";

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrl: './recipe-list.component.css'
})
export class RecipeListComponent implements OnInit{
  recipes: Recipe[] = [
    new Recipe("a test recipe", " this is a test", "https://images.immediate.co.uk/production/" +
      "volatile/sites/30/2020/08/chorizo-mozarella-gnocchi-bake-cropped-9ab73a3.jpg?quality=90&webp=true&resize=600,545"),
    new Recipe("a test recipe2 ", " this is a test 2", "https://images.immediate.co.uk/production/" +
      "volatile/sites/30/2020/08/chorizo-mozarella-gnocchi-bake-cropped-9ab73a3.jpg?quality=90&webp=true&resize=600,545")
  ];
  constructor() {
  }

  // oninit: initiate our component with some specific value or initial status
  ngOnInit() {
  }
}
