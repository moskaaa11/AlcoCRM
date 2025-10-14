import { configureStore } from "@reduxjs/toolkit";
// reducers
import NavBarSlice from "./reducers/NavBarReducer/NavBarReducer";
import NewRecipeSlice from "./reducers/NewRecipeReducer/NewRecipeReducer";

const store = configureStore({
    reducer:{
        // login: logginSlice.reducer,
        navbar: NavBarSlice.reducer,
        newrecipe: NewRecipeSlice.reducer
        
    }
})

export default store;