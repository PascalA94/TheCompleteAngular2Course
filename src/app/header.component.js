"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require('@angular/core');
var HeaderComponent = (function () {
    function HeaderComponent(recipeService) {
        this.recipeService = recipeService;
    }
    HeaderComponent.prototype.onStore = function () {
        this.recipeService.storeData().subscribe(function (data) { return console.log(data); }, function (errors) { return console.log(errors); });
    };
    HeaderComponent.prototype.onFetch = function () {
        this.recipeService.fetchData();
    };
    HeaderComponent = __decorate([
        core_1.Component({
            selector: 'rb-header',
            templateUrl: './header.component.html'
        })
    ], HeaderComponent);
    return HeaderComponent;
}());
exports.HeaderComponent = HeaderComponent;
