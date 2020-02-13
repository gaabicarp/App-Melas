import {MEALS} from '../../data/dummy-data'
import { TOGGLE_FAVORITE, SET_FILTERS } from '../actions/meals';

const initialState ={
    meals: MEALS,
    filteredMeals: MEALS,
    favoritesMeals: []
}

const mealsReducer = (state = initialState, action) =>{
    switch(action.type){
        case TOGGLE_FAVORITE:
            const existingIndex = state.favoritesMeals.findIndex(meal=> meal.id === action.mealID);
            if(existingIndex>=0){
                console.log('sape')
                const updatedFavmeals = [...state.favoritesMeals];
                updatedFavmeals.splice(existingIndex, 1)
                return {...state, favoritesMeals: updatedFavmeals}
            }else{
                console.log('nosape')
                const meal = state.meals.find(meal=>meal.id === action.mealID)
                return {...state, favoritesMeals: state.favoritesMeals.concat(meal)}
            }
        case SET_FILTERS:
            const appliedFilters = action.filters;
            const updateFilteredMeals = state.meals.filter(meal=>{
                if(appliedFilters.GlutenFree && !meal.isGlutenFree){
                    return false;
                }
                if(appliedFilters.LactoseFree && !meal.isLactoseFree){
                    return false;
                }
                if(appliedFilters.Vegetarian && !meal.isVegetarian){
                    return false;
                }
                if(appliedFilters.Vegan && !meal.isVegan){
                    return false;
                }
                return true;
            })
            return {...state, filteredMeals: updateFilteredMeals };
        default:
                return state; 
    }
    return state;
}

export default mealsReducer