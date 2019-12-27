import { NgModule } from '@angular/core';
import { Routes, RouterModule  } from '@angular/router';

import { RecipesComponent } from './recipes/recipes.component';
import { RecipeDetailComponent } from './recipes/recipe-detail/recipe-detail.component';
import { RecipeListComponent } from './recipes/recipe-list/recipe-list.component';
import { RecipeStartComponent } from './recipes/recipe-start/recipe-start.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { ShoppingEditComponent } from './shopping-list/shopping-edit/shopping-edit.component';

const appRoutes: Routes =[
    { path: '', redirectTo: '/recipes', pathMatch: 'full' },
    { path: 'recipes', component: RecipesComponent, children:[
        { path: '', component: RecipeStartComponent },
        { path: ':id', component: RecipeDetailComponent },
        { path: 'recipe-list', component: RecipeListComponent }
    ]},
    { path: 'shopping-list', component: ShoppingListComponent, children:[
        { path: 'shopping-edit', component: ShoppingEditComponent }
    ]},
];

@NgModule({
    imports: [RouterModule.forRoot(appRoutes)],
    exports: [RouterModule]
})

export class AppRoutingModule {

}
