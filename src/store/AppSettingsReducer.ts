import { createSlice } from '@reduxjs/toolkit';
import AppSettingsInterface from '@appInterfaces/AppSettingsInterface';

const petsListState: AppSettingsInterface = {
  sideMenuOpen: false
};

const appSettingsSlice = createSlice({
  name: 'petsList',
  initialState: petsListState,
  reducers: {
    toggleSideMenu: (state) => {
      state.sideMenuOpen = !state.sideMenuOpen;
    }
  }
});

export const { toggleSideMenu } = appSettingsSlice.actions;

export default appSettingsSlice.reducer;
