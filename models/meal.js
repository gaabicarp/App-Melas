class Meal{
    constructor(id,categoryIds, title, affordabilty, complexity, imageUrl, duration, ingredients, steps, isFlutenFree, isVegan, isVegeterian, isLactoseFree){
        this.id = id;
        this.categoryIds = categoryIds;
        this.title = title;
        this.affordabilty = affordabilty;
        this.complexity = complexity;
        this.imageUrl = imageUrl;
        this.duration = duration;
        this.ingredients = ingredients;
        this.steps = steps;
        this.isFlutenFree = isFlutenFree;
        this.isLactoseFree = isLactoseFree;
        this.isVegan = isVegan;
        this.isVegeterian = isVegeterian

    }
}

export default Meal;