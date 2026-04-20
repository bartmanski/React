import React from 'react';
import { AddRecipeForm } from './components/AddRecipeForm';
import { SearchBar } from './components/SearchBar';
import { RecipeList } from './components/RecipeList';
import './App.css';

const App = () => {
    return (
        <div className="container">
            <h1>📚 My Recipe Book</h1>
            <div className="controls">
                <SearchBar />
                <AddRecipeForm />
            </div>
            <RecipeList />
        </div>
    );
};

export default App;
