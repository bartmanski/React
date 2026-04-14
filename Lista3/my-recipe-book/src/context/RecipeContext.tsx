import React, { createContext, useReducer, ReactNode, useContext } from 'react';
import { type RecipeState, type Action } from './types';
import { recipeReducer } from './RecipeReducer';

const initialState: RecipeState = {
    recipes: [
        { id: '1', title: 'Pancakes', description: 'Fluffy pancakes with syrup.', isFavorite: true },
        { id: '2', title: 'Salad', description: 'Fresh garden salad.', isFavorite: false }
    ]
};

interface RecipeContextType {
    state: RecipeState;
    dispatch: React.Dispatch<Action>;
}

const RecipeContext = createContext<RecipeContextType | undefined>(undefined);

export const RecipeProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    const [state, dispatch] = useReducer(recipeReducer, initialState);

    return (
        <RecipeContext.Provider value={{ state, dispatch }}>
            {children}
        </RecipeContext.Provider>
    );
};

export const useRecipeContext = () => {
    const context = useContext(RecipeContext);
    if (!context) {
        throw new Error('useRecipeContext must be used within a RecipeProvider');
    }
    return context;
};
