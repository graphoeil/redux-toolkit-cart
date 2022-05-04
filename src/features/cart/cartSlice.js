// Imports
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
// import { openModal } from '../modal/modalSlice';

// Variables
const url = 'https://course-api.com/react-useReducer-cart-project';

// Initial state
const initialState = {
	cartItems:[],
	amount:4,
	total:0,
	isLoading:true
};

// Load data from server, most basic setup
// export const getCartItems = createAsyncThunk('cart/getCartItems', () => {
// 	// Callback
// 	return fetch(url).then(response => {
// 		return response.json();
// 	}).catch(error => {
// 		console.log(error);
// 	});
// });

// Load data from server, more complicated setup with axios
export const getCartItems = createAsyncThunk('cart/getCartItems', async(type, thunkAPI) => {
	try {
		// console.log(type); // smartphone
		// console.log(thunkAPI); // We can get all the state
		// console.log(thunkAPI.getState()); // {cart: {…}, modal: {…}} ,-)
		// We can also invoke state methods
		// thunkAPI.dispatch(openModal());
		const response = await axios.get(url);
		return response.data;
	} catch(error){
		return thunkAPI.rejectWithValue('Something went wrong...')
	}
});


// Slice = Feature (fonctionnalité)
const cartSlice = createSlice({
	name:'cart',
	initialState,
	reducers:{
		// Clear cart
		clearCart:(state) => {
			// state.cartItems = [];
			// We can also return a new state, like with useReducer
			return{ ...initialState, cartItems:[] };
		},
		// Remove item
		removeItem:(state, action) => {
			const itemID = action.payload;
			state.cartItems = state.cartItems.filter((item) => {
				return item.id !== itemID;
			});
		},
		// Increase amount
		increase:(state, action) => {
			const itemID = action.payload;
			const cartItem = state.cartItems.find((item) => {
				return item.id === itemID;
			});
			cartItem.amount = cartItem.amount + 1;
		},
		// Decrease amount
		decrease:(state, action) => {
			const itemID = action.payload;
			const cartItem = state.cartItems.find((item) => {
				return item.id === itemID;
			});
			cartItem.amount = cartItem.amount - 1;
		},
		// Total
		calculateTotals:(state) => {
			const { amount, total } = state.cartItems.reduce((acc, current) => {
				acc.amount += current.amount;
				acc.total += current.amount * current.price;
				return acc;
			},{ amount:0, total:0 });
			state.amount = amount;
			state.total = total;
		}
	},
	extraReducers:{
		// Lifecycle actions for createAsyncThunk
		[getCartItems.pending]:(state) => {
			state.isLoading = true;
		},
		[getCartItems.fulfilled]:(state, action) => {
			state.isLoading = false;
			state.cartItems = action.payload;
		},
		[getCartItems.rejected]:(state, action) => {
			console.log(action.payload); // Something went wrong...
			state.isLoading = false;
		}
	}
});

// Actions, we import clearCart in CartContainer
export const { clearCart, removeItem, increase, decrease, calculateTotals } = cartSlice.actions;

// Reducer, that controls the state of this slice
export default cartSlice.reducer;