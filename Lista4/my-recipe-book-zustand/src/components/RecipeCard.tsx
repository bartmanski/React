import React from 'react';
import { Recipe } from '../types/Recipe';
import { useRecipeStore } from '../store/recipeStore';

interface RecipeCardProps {
    recipe: Recipe;
}

export const RecipeCard: React.FC<RecipeCardProps> = ({ recipe }) => {
    const toggleFavorite = useRecipeStore((state) => state.toggleFavorite);
    const deleteRecipe = useRecipeStore((state) => state.deleteRecipe);

    const handleToggleFavorite = () => {
        toggleFavorite(recipe.id);
    };

    const handleDelete = () => {
        if (window.confirm(`Delete recipe "${recipe.title}"?`)) {
            deleteRecipe(recipe.id);
        }
    };

    return (
        <div className={`recipe-card ${recipe.isFavorite ? 'favorite' : ''}`}>
            <div className="card-header">
                <h3>{recipe.title}</h3>
                <button 
                    onClick={handleToggleFavorite} 
                    className="fav-btn"
                    title={recipe.isFavorite ? "Remove from Favorites" : "Add to Favorites"}
                >
                    {recipe.isFavorite ? '★' : '☆'}
                </button>
            </div>
            <p className="card-body">{recipe.description}</p>
            <button onClick={handleDelete} className="delete-btn">Delete</button>
        </div>
    );
};
