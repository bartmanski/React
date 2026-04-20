import React from 'react';
import { useRecipeStore } from '../store/recipeStore';

export const SearchBar: React.FC = () => {
    const searchQuery = useRecipeStore((state) => state.searchQuery);
    const setSearchQuery = useRecipeStore((state) => state.setSearchQuery);
    const showFavorites = useRecipeStore((state) => state.showFavorites);
    const setShowFavorites = useRecipeStore((state) => state.setShowFavorites);

    return (
        <div className="search-bar">
            <input 
                type="text" 
                placeholder="Search recipes..." 
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="search-input"
            />
            <label className="favorite-filter">
                <input 
                    type="checkbox" 
                    checked={showFavorites}
                    onChange={(e) => setShowFavorites(e.target.checked)}
                />
                Show Favorites Only
            </label>
        </div>
    );
};
