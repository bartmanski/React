import { create } from 'zustand';
import { Recipe, RecipeStore } from '../types/Recipe';

export const useRecipeStore = create<RecipeStore>((set) => ({
    recipes: [
        { id: '1', title: 'Pancakes', description: 'Fluffy pancakes with syrup.', isFavorite: true },
        { id: '2', title: 'Salad', description: 'Fresh garden salad.', isFavorite: false }
    ],
    searchQuery: '',
    showFavorites: false,
    
    addRecipe: (recipe: Recipe) => set((state) => ({
        recipes: [...state.recipes, recipe]
    })),
    
    deleteRecipe: (id: string) => set((state) => ({
        recipes: state.recipes.filter((recipe) => recipe.id !== id)
    })),
    
    toggleFavorite: (id: string) => set((state) => ({
        recipes: state.recipes.map((recipe) =>
            recipe.id === id ? { ...recipe, isFavorite: !recipe.isFavorite } : recipe
        )
    })),
    
    setSearchQuery: (query: string) => set({
        searchQuery: query
    }),
    
    setShowFavorites: (show: boolean) => set({
        showFavorites: show
    })
}));
