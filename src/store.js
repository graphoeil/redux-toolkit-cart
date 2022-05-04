// Imports
import { configureStore } from '@reduxjs/toolkit';
import cartReducer from './features/cart/cartSlice';
import modalReducer from './features/modal/modalSlice';

// Store, store combines all states
const store = configureStore({
	// Combinating reducers
	reducer:{
		// associates state and reducer
		cart:cartReducer,
		modal:modalReducer
	}
});

// Export
export default store;