import { EventEmitter, Injectable } from '@angular/core';

import { Recipe } from './recipe.model';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';

@Injectable()
export class RecipeService{
    recipeSelected = new EventEmitter<Recipe>();
    private recipes: Recipe[] =[
        new Recipe(
            'Hot Pot', 
            'Special for winter!',
            'https://content.fortune.com/wp-content/uploads/2019/08/HDL_1.jpg', 
            [
                new Ingredient('Pork', 2),
                new Ingredient('Chilli', 1)
            ]),
        new Recipe(
            'Pasta', 
            'I miss my italian mama!', 
            'https://www.bbcgoodfood.com/sites/default/files/recipe-collections/collection-image/2013/05/spaghetti-bolognese_2.jpg', 
            [
                new Ingredient('oliv', 10),
                new Ingredient('oil', 1)
            ]),
        new Recipe(
            'Pizza', 
            'Not the complex one', 
            'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS2z-fO3BhgYYSe5j4qAedz8oAdINOfJbMFe1NgFsk0m_XIQt3H&s', 
            [
                new Ingredient('oliv', 100),
                new Ingredient('basil', 5)
            ])
      ];

      constructor(private shoppingListService: ShoppingListService){}

      getRecipes(){
          return this.recipes.slice();
      }

      getRecipe(index: number){
        return this.recipes[index];
      }

      addIngredientsToShoppingList(ingredients: Ingredient[]){
        this.shoppingListService.addIngredients(ingredients);
      }
}