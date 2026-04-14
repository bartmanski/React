import React from 'react';

interface SearchBarProps {
    searchQuery: string;
    setSearchQuery: (query: string) => void;
    showFavorites: boolean;
    setShowFavorites: (show: boolean) => void;
}

export const SearchBar: React.FC<SearchBarProps> = ({ 
    searchQuery, setSearchQuery, showFavorites, setShowFavorites 
}) => {
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
