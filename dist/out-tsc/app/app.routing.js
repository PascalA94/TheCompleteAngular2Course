import { RouterModule } from '@angular/router';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { HomeComponent } from "./home.component";
var APP_ROUTES = [
    { path: '', component: HomeComponent },
    { path: 'recipes', loadChildren: 'app/recipes/recipes.module#RecipesModule' },
    { path: 'shopping-list', component: ShoppingListComponent }
];
export var routing = RouterModule.forRoot(APP_ROUTES);
//# sourceMappingURL=C:/Users/Pascal/Documents/Udemy/Angular2_Course/Angular 2/recipe-book/src/app/app.routing.js.map