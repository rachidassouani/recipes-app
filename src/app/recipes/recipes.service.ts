import { Injectable } from '@angular/core';
import { Recipe } from './recipe.model';

@Injectable({
  providedIn: 'root'
})
export class RecipesService {

  private recipes: Recipe[] = [
    {id: '1', title: 'test1', imageUrl: 'https://picsum.photos/200', ingredients:['haha', 'hihi']},
    {id: '2', title: 'test2', imageUrl: 'https://picsum.photos/200', ingredients:['haha', 'hihi']},
    {id: '3', title: 'test3', imageUrl: 'https://picsum.photos/200', ingredients:['haha', 'hihi']},
    {id: '4', title: 'test4', imageUrl: 'https://picsum.photos/200', ingredients:['haha', 'hihi']}
  ];
  
  constructor() { }

  getAllRecipes() {
    return [...this.recipes];
    // return this.recipes;
  }

  getRecipeById(id: string) {
    return {...this.recipes.find((r) => {
      return r.id === id
    })}
  }
  
  deleteRecipe(recipeId: string) {
    this.recipes = this.recipes.filter((recipe) => {
      return recipe.id !== recipeId;
    })
  }
}
