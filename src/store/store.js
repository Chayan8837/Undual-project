// store.js
import { configureStore } from '@reduxjs/toolkit';
import categoryReducer from './categorySlice'; // Ensure the path is correct
import productReducer from './productSlice';   // Ensure the path is correct

const store = configureStore({
  reducer: {
    categories: categoryReducer, // Handle categories
    products: productReducer,    // Handle products
  },
});

export default store;
