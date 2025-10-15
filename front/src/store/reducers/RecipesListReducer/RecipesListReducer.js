import { createSlice } from "@reduxjs/toolkit";
import recipes from './data'


const RecipesListSlice = createSlice({
    name: 'recipeslist',
    initialState:{
        recipeslist: recipes,
        singlerecipe: [],
        calculation: ''
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
        },
        calcList:(state,action)=>{
            state.calculation = action.payload.credential
        }
    }
})

export const {recipesList, singleRecipe,cleanCard,calcList} = RecipesListSlice.actions;
export default RecipesListSlice;