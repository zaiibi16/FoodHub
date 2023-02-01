import {configureStore} from '@reduxjs/toolkit';
import {persistStore, persistReducer} from 'redux-persist';
import {combineReducers} from '@reduxjs/toolkit';
import AsyncStorage from '@react-native-community/async-storage';

import favouriteRestaurantsReducer from './favouriteRestaurants';
import favouriteFoodItemsReducer from './favouriteFoodItems';
import cartReducer from './cart';

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
};

let rootReducer = combineReducers({
  favouriteRestaurants: favouriteRestaurantsReducer,
  favouriteFoodItems: favouriteFoodItemsReducer,
  cart: cartReducer,
});

let persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});
