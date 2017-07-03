var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { NgModule } from '@angular/core';
import { CommonModule } from "@angular/common";
import { ReactiveFormsModule } from "@angular/forms";
import { RecipesComponent } from "./recipes.component";
import { RecipeStartComponent } from "./recipe-start.component";
import { RecipeItemComponent } from "./recipe-list/recipe-item.component";
import { RecipeListComponent } from "./recipe-list/recipe-list.component";
import { RecipeEditComponent } from "./recipe-edit/recipe-edit.component";
import { RecipeDetailComponent } from "./recipe-detail/recipe-detail.component";
import { recipesRouting } from "./recipes.routing";
export var RecipesModule = (function () {
    function RecipesModule() {
    }
    RecipesModule = __decorate([
        NgModule({
            declarations: [
                RecipesComponent,
                RecipeStartComponent,
                RecipeItemComponent,
                RecipeListComponent,
                RecipeEditComponent,
                RecipeDetailComponent
            ],
            imports: [
                CommonModule,
                ReactiveFormsModule,
                recipesRouting
            ],
        }), 
        __metadata('design:paramtypes', [])
    ], RecipesModule);
    return RecipesModule;
}());
//# sourceMappingURL=C:/Users/Pascal/Documents/Udemy/Angular2_Course/Angular 2/recipe-book/src/app/recipes/recipes.module.js.map