export interface Recipe {
    id: string;
    title: string;
    description: string;
    isFavorite: boolean;
}

export interface RecipeState {
    recipes: Recipe[];
}

export type Action =
    | { type: 'ADD_RECIPE'; payload: Recipe }
    | { type: 'DELETE_RECIPE'; payload: string }
    | { type: 'TOGGLE_FAVORITE'; payload: string };
