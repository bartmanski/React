import React, { useMemo } from 'react';
import { useRecipeStore } from '../store/recipeStore';
import { RecipeCard } from './RecipeCard';

export const RecipeList: React.FC = () => {
    const recipes = useRecipeStore((state) => state.recipes);
    const searchQuery = useRecipeStore((state) => state.searchQuery);
    const showFavorites = useRecipeStore((state) => state.showFavorites);

    const filteredRecipes = useMemo(() => {
        return recipes.filter((recipe) => {
            const matchesSearch = recipe.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                                recipe.description.toLowerCase().includes(searchQuery.toLowerCase());
            const matchesActive = showFavorites ? recipe.isFavorite : true;
            return matchesSearch && matchesActive;
        });
    }, [recipes, searchQuery, showFavorites]);

    return (
        <div className="recipe-list">
            {filteredRecipes.length > 0 ? (
                filteredRecipes.map((recipe) => (
                    <RecipeCard key={recipe.id} recipe={recipe} />
                ))
            ) : (
                <div className="no-recipes">No recipes found matching your criteria.</div>
            )}
        </div>
    );
};
