import { type RecipeState, type Action } from './types';

export const recipeReducer = (state: RecipeState, action: Action): RecipeState => {
    switch (action.type) {
        case 'ADD_RECIPE':
            return {
                ...state,
                recipes: [...state.recipes, action.payload]
            };
        case 'DELETE_RECIPE':
            return {
                ...state,
                recipes: state.recipes.filter(recipe => recipe.id !== action.payload)
            };
        case 'TOGGLE_FAVORITE':
            return {
                ...state,
                recipes: state.recipes.map(recipe =>
                    recipe.id === action.payload
                        ? { ...recipe, isFavorite: !recipe.isFavorite }
                        : recipe
                )
            };
        default:
            return state;
    }
};
