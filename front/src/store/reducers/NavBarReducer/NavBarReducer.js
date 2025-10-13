import { createSlice } from "@reduxjs/toolkit";
import mainItems from './mainItems'


const NavBarSlice = createSlice({
    name: 'navbar',
    initialState:{
        main: mainItems,
    },
    reducers:{
        mainBar:(state, action) => {
            state.main.push(action.payload);
        },
    }
})

export const {mainBar} = NavBarSlice.actions;
export default NavBarSlice;