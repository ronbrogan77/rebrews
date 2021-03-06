var Rebrews;
(function (Rebrews) {
    var Recipe;
    (function (Recipe) {
        var RecipeComponent = {
            bindings: {},
            templateUrl: "/app/recipe/recipe.html",
            controller: "RecipeController as recipeCtrl"
        };
        var RecipeController = (function () {
            function RecipeController($stateParams, rttService, $http, RecipesService) {
                var self = this;
                self.recipeId = $stateParams.recipe_Id;
                self.recipe = {};
                self.getClampedHydroReading = function (finalGravity) {
                    var min = 0;
                    var max = 33;
                    return Math.min(Math.max((finalGravity - 1) * 1000, min), max) / 3;
                };
                self.getHoppinessIndex = function (ibus) {
                    var min = 0;
                    var max = 13;
                    console.log(ibus);
                    return Math.min(Math.max(ibus / 8, min), max);
                };
                self.getBarleyIndex = function (gravity) {
                    var min = 0;
                    var max = 100;
                    return Math.min(Math.max((gravity - 1) * 1000), min, max) / 4;
                };
                self.formatGravity = function () {
                    return function (gravityValue) {
                        return parseFloat(gravityValue).toFixed(3);
                    };
                };
                self.formatAbv = function () {
                    return function (abvValue) {
                        return parseFloat(abvValue).toFixed(1) + "%";
                    };
                };
                function initialize() {
                    RecipesService.getRecipeById(self.recipeId).then(function (data) {
                        self.recipe = data;
                    });
                }
                initialize();
            }
            RecipeController.providerName = "RecipeController";
            RecipeController.$inject = ["$stateParams", "rttService", "$http", "RecipesService"];
            return RecipeController;
        }());
        Recipe.RecipeController = RecipeController;
        angular.module("Rebrews").controller(RecipeController.providerName, RecipeController).component("recipeDisplay", RecipeComponent);
    })(Recipe = Rebrews.Recipe || (Rebrews.Recipe = {}));
})(Rebrews || (Rebrews = {}));
//# sourceMappingURL=recipe.js.map