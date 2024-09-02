import { createSlice } from '@reduxjs/toolkit';
import AppSettingsInterface from '@appInterfaces/AppSettingsInterface';

const petsListState: AppSettingsInterface = {
  sideMenuOpen: false,
  blogMenuOpen: false
};

const appSettingsSlice = createSlice({
  name: 'petsList',
  initialState: petsListState,
  reducers: {
    toggleSideMenu: (state) => {
      state.sideMenuOpen = !state.sideMenuOpen;
    },
    toggleBlogMenu: (state) => {
      state.blogMenuOpen = !state.blogMenuOpen;
    }
  }
});

export const { toggleSideMenu, toggleBlogMenu } = appSettingsSlice.actions;

export default appSettingsSlice.reducer;
