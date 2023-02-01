import {createSlice} from '@reduxjs/toolkit';

const favouriteRestaurantsSlice = createSlice({
  name: 'favouriteRestaurants',
  initialState: {
    ids: [],
  },
  reducers: {
    addFavouriteRestaurant: (state, action) => {
      state.ids.push(action.payload.id);
    },
    removeFavouriteRestaurant: (state, action) => {
      state.ids.splice(state.ids.indexOf(action.payload.id), 1);
    },
  },
});

export const addFavouriteRestaurant =
  favouriteRestaurantsSlice.actions.addFavouriteRestaurant;
export const removeFavouriteRestaurant =
  favouriteRestaurantsSlice.actions.removeFavouriteRestaurant;
export default favouriteRestaurantsSlice.reducer;
