import { configureStore } from "@reduxjs/toolkit";
// reducers
import NavBarSlice from "./reducers/NavBarReducer/NavBarReducer";
import NewRecipeSlice from "./reducers/NewRecipeReducer/NewRecipeReducer";
import RecipesListSlice from "./reducers/RecipesListReducer/RecipesListReducer";

const store = configureStore({
    reducer:{
        // login: logginSlice.reducer,
        navbar: NavBarSlice.reducer,
        newrecipe: NewRecipeSlice.reducer,
        recipeslist: RecipesListSlice.reducer,
    }
})

export default store;