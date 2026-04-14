import React, { useMemo } from 'react';
import { useRecipeContext } from '../context/RecipeContext';
import { RecipeCard } from './RecipeCard';

interface RecipeListProps {
    searchQuery: string;
    showFavorites: boolean;
}

export const RecipeList: React.FC<RecipeListProps> = ({ searchQuery, showFavorites }) => {
    const { state: { recipes } } = useRecipeContext();

    const filteredRecipes = useMemo(() => {
        return recipes.filter(recipe => {
            const matchesSearch = recipe.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                                recipe.description.toLowerCase().includes(searchQuery.toLowerCase());
            const matchesActive = showFavorites ? recipe.isFavorite : true;
            return matchesSearch && matchesActive;
        });
    }, [recipes, searchQuery, showFavorites]);

    return (
        <div className="recipe-list">
            {filteredRecipes.length > 0 ? (
                filteredRecipes.map(recipe => (
                    <RecipeCard key={recipe.id} recipe={recipe} />
                ))
            ) : (
                <div className="no-recipes">No recipes found matching your criteria.</div>
            )}
        </div>
    );
};
