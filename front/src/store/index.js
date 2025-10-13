import { configureStore } from "@reduxjs/toolkit";
// reducers
import NavBarSlice from "./reducers/NavBarReducer/NavBarReducer";

const store = configureStore({
    reducer:{
        // login: logginSlice.reducer,
        navbar: NavBarSlice.reducer,
        
    }
})

export default store;