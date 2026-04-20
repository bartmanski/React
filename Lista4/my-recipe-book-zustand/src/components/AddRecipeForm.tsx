import React, { useState } from 'react';
import { useRecipeStore } from '../store/recipeStore';

export const AddRecipeForm: React.FC = () => {
    const addRecipe = useRecipeStore((state) => state.addRecipe);
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        
        if (!title.trim() || !description.trim()) {
            alert('Please enter both title and description');
            return;
        }

        const newRecipe = {
            id: Date.now().toString(),
            title: title.trim(),
            description: description.trim(),
            isFavorite: false
        };

        addRecipe(newRecipe);
        setTitle('');
        setDescription('');
    };

    return (
        <form onSubmit={handleSubmit} className="add-recipe-form">
            <h3>Add New Recipe</h3>
            <div className="form-group">
                <input 
                    type="text" 
                    placeholder="Recipe Title" 
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    required
                />
            </div>
            <div className="form-group">
                <textarea 
                    placeholder="Recipe Description" 
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    rows={4}
                    required
                />
            </div>
            <button type="submit" className="add-btn">Add Recipe</button>
        </form>
    );
};
