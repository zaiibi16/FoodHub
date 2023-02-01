import {createSlice} from '@reduxjs/toolkit';

const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    items: [],
  },
  reducers: {
    addCartItem: (state, action) => {
      state.items.push({
        id: action.payload.id,
        itemId: action.payload.itemId,
        count: action.payload.count,
        addOnId: action.payload.addOnId,
        cost: action.payload.cost,
      });
    },
    editCartItem: (state, action) => {
      const index = state.items.indexOf(
        state.items.find(item => item.id === action.payload.id),
      );
      state.items[index].count = action.payload.count;
    },
    removeCartItem: (state, action) => {
      const index = state.items.indexOf(
        state.items.find(item => item.id === action.payload.id),
      );
      state.items.splice(index, 1);
    },
    emptyCart: state => {
      state.items = [];
    },
  },
});

export const addCartItem = cartSlice.actions.addCartItem;
export const editCartItem = cartSlice.actions.editCartItem;
export const removeCartItem = cartSlice.actions.removeCartItem;
export const emptyCart = cartSlice.actions.emptyCart;
export default cartSlice.reducer;
