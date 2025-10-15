import { createSlice } from "@reduxjs/toolkit";
import recipes from './data'


const RecipesListSlice = createSlice({
    name: 'recipeslist',
    initialState:{
        recipeslist: recipes,
        singlerecipe: ''
    },
    reducers:{
        recipesList:(state, action) => {
            state.recipeslist.push(action.payload);
        },
        singleRecipe:(state,action)=>{
            state.singlerecipe = action.payload.credential;
        },
        cleanCard:(state)=>{
            state.singlerecipe = '';
        }
    }
})

export const {recipesList, singleRecipe,cleanCard} = RecipesListSlice.actions;
export default RecipesListSlice;