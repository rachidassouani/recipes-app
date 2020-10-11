import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { Recipe } from '../recipe.model';
import { RecipesService } from '../recipes.service';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.page.html',
  styleUrls: ['./recipe-detail.page.scss'],
})
export class RecipeDetailPage implements OnInit {

  id: string;
  recipe: Recipe;

  constructor(
    private activatedRoute: ActivatedRoute,
    private recipeService: RecipesService,
    private router: Router,
    private alertController: AlertController) { }

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe(paramMap => {
      if (!paramMap.has('recipeId')) {
        // if so how link hasen't recipeId param so will redirect to ...
        this.router.navigate(['/recipes']);
        return;
      }
      const recipeId = paramMap.get('recipeId');
      this.recipe = this.recipeService.getRecipeById(recipeId);   
    });
  }
  
  onDeleteRecipe() {
    this.alertController.create({
      header: 'Are you sure?',
      message: 'Are you sure you want to delete this item?',
      buttons: [
        {text: 'Cancel', role: 'cancel'},
        {text: 'Delete', handler: () => {
          this.recipeService.deleteRecipe(this.recipe.id);
          this.router.navigate(['/recipes']);
        }},
      ]
    }).then((alertEl)=> {
      alertEl.present();
    })
  }
}
