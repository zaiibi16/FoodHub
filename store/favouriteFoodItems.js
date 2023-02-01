import {createSlice} from '@reduxjs/toolkit';

const favouriteFoodItemSlice = createSlice({
  name: 'favouriteFoodItems',
  initialState: {
    ids: [],
  },
  reducers: {
    addFavouriteFoodItem: (state, action) => {
      state.ids.push(action.payload.id);
    },
    removeFavouriteFoodItem: (state, action) => {
      state.ids.splice(state.ids.indexOf(action.payload.id), 1);
    },
  },
});

export const addFavouriteFoodItem =
  favouriteFoodItemSlice.actions.addFavouriteFoodItem;
export const removeFavouriteFoodItem =
  favouriteFoodItemSlice.actions.removeFavouriteFoodItem;
export default favouriteFoodItemSlice.reducer;
