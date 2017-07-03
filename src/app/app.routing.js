"use strict";
var router_1 = require('@angular/router');
var shopping_list_component_1 = require('./shopping-list/shopping-list.component');
var home_component_1 = require("./home.component");
var APP_ROUTES = [
    { path: '', component: home_component_1.HomeComponent },
    { path: 'recipes', loadChildren: 'app/recipes/recipes.module#RecipesModule' },
    { path: 'shopping-list', component: shopping_list_component_1.ShoppingListComponent }
];
exports.routing = router_1.RouterModule.forRoot(APP_ROUTES);
