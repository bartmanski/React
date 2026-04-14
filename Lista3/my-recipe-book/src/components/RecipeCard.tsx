import React from 'react';
import { type Recipe } from '../context/types';
import { useRecipeContext } from '../context/RecipeContext';

interface RecipeCardProps {
    recipe: Recipe;
}

export const RecipeCard: React.FC<RecipeCardProps> = ({ recipe }) => {
    const { dispatch } = useRecipeContext();

    const handleToggleFavorite = () => {
        dispatch({ type: 'TOGGLE_FAVORITE', payload: recipe.id });
    };

    const handleDelete = () => {
        if (window.confirm(`Delete recipe "${recipe.title}"?`)) {
            dispatch({ type: 'DELETE_RECIPE', payload: recipe.id });
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
