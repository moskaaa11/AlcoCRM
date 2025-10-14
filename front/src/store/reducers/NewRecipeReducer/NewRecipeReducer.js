import { createSlice } from "@reduxjs/toolkit";


const NewRecipeSlice = createSlice({
    name: 'newrecipe',
    initialState:{
        recipe:'',
    },
    reducers:{
        newRecipe:(state, action) => {
            state.recipe = action.payload.credential;
        },
        refreshRecipe:(state)=>{
            state.recipe = ''
        }
    }
})

export const {newRecipe, refreshRecipe} = NewRecipeSlice.actions;
export default NewRecipeSlice;