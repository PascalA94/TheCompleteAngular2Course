import { routing } from './app.routing';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';

import { RecipeBookComponent } from './recipe-book.component';
import { HeaderComponent } from './header.component';
import { RecipeService } from './recipes/recipe.service';
import { ShoppingListService } from './shopping-list/shopping-list.service';
import { ShoppingListModule } from "./shopping-list/shopping-list.module";
import { CoreModule } from "./core.module";

@NgModule({
  declarations: [
    RecipeBookComponent,
    HeaderComponent,
  ],
  imports: [
    BrowserModule,
    HttpModule,
    routing,
    ShoppingListModule,
    CoreModule
  ],
  providers: [RecipeService, ShoppingListService],
  bootstrap: [RecipeBookComponent]
})
export class AppModule { }
