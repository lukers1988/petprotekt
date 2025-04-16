import { createSlice } from '@reduxjs/toolkit';
import AppSettingsInterface from '@appInterfaces/AppSettingsInterface';

const petsListState: AppSettingsInterface = {
    sideMenuOpen: false,
    chosenMenuOption: '01',
};

const appSettingsSlice = createSlice({
    name: "petsList",
    initialState: petsListState,
    reducers: {
        toggleSideMenu: (state) => {
            state.sideMenuOpen = !state.sideMenuOpen;
        },
        selectMenuOption: (state, action) => {
            state.chosenMenuOption = action.payload;
        },
    },
});

export const { toggleSideMenu, selectMenuOption } = appSettingsSlice.actions;

export default appSettingsSlice.reducer;
