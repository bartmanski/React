import React, { useState } from 'react';
import { RecipeProvider } from './context/RecipeContext';
import { AddRecipeForm } from './components/AddRecipeForm';
import { SearchBar } from './components/SearchBar';
import { RecipeList } from './components/RecipeList';
import './App.css';

const App = () => {
    const [searchQuery, setSearchQuery] = useState('');
    const [showFavorites, setShowFavorites] = useState(false);

    return (
        <RecipeProvider>
            <div className="container">
                <h1>📚 My Recipe Book</h1>
                <div className="controls">
                    <SearchBar 
                        searchQuery={searchQuery} 
                        setSearchQuery={setSearchQuery} 
                        showFavorites={showFavorites} 
                        setShowFavorites={setShowFavorites} 
                    />
                    <AddRecipeForm />
                </div>
                <RecipeList 
                    searchQuery={searchQuery} 
                    showFavorites={showFavorites} 
                />
            </div>
        </RecipeProvider>
    );
};

export default App;
