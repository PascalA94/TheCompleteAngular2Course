import { RecipeEditComponent } from './recipe-edit/recipe-edit.component';
import { RecipeDetailComponent } from './recipe-detail/recipe-detail.component';
import { RecipeStartComponent } from './recipe-start.component';
import { RouterModule } from '@angular/router';
import { RecipesComponent } from "./recipes.component";
var RECIPE_ROUTES = [
    { path: '', component: RecipesComponent, children: [
            { path: '', component: RecipeStartComponent },
            { path: 'new', component: RecipeEditComponent },
            { path: ':id', component: RecipeDetailComponent },
            { path: ':id/edit', component: RecipeEditComponent }
        ] }
];
export var recipesRouting = RouterModule.forChild(RECIPE_ROUTES);
//# sourceMappingURL=C:/Users/Pascal/Documents/Udemy/Angular2_Course/Angular 2/recipe-book/src/app/recipes/recipes.routing.js.map