import { EventEmitter } from '@angular/core';

import { Recipe } from './recipe.model';

export class RecipeService{
    recipeSelected = new EventEmitter<Recipe>();
    private recipes: Recipe[] =[
        new Recipe('Hot Pot', 'Special for winter!','https://content.fortune.com/wp-content/uploads/2019/08/HDL_1.jpg'),
        new Recipe('Pasta', 'I miss my italian mama!','https://www.bbcgoodfood.com/sites/default/files/recipe-collections/collection-image/2013/05/spaghetti-bolognese_2.jpg'),
        new Recipe('Pizza', 'Not the complex one', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS2z-fO3BhgYYSe5j4qAedz8oAdINOfJbMFe1NgFsk0m_XIQt3H&s')
      ];

      getRecipe(){
          return this.recipes.slice();
      }
}