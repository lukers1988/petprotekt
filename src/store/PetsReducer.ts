import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import PetsListInterface, { petInterface } from '@appInterfaces/PetListInterface';

const petsListState: PetsListInterface = {
  pets: [],
  loading: false
};

const petsSlice = createSlice({
  name: 'petsList',
  initialState: petsListState,
  reducers: {
    addPet: (state, action: PayloadAction<petInterface>) => {
      state.pets.push(action.payload);
    },
    getAllPets: (state, action: PayloadAction<petInterface[]>) => {
      state.pets = action.payload;
      state.loading = false;
    },
    startLoading: (state) => {
      state.loading = true;
    }
  }
});

export const { addPet, getAllPets, startLoading } = petsSlice.actions;

export default petsSlice.reducer;
