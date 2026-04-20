export interface Recipe {
    id: string;
    title: string;
    description: string;
    isFavorite: boolean;
}

export interface RecipeStore {
    recipes: Recipe[];
    searchQuery: string;
    showFavorites: boolean;
    addRecipe: (recipe: Recipe) => void;
    deleteRecipe: (id: string) => void;
    toggleFavorite: (id: string) => void;
    setSearchQuery: (query: string) => void;
    setShowFavorites: (show: boolean) => void;
}
