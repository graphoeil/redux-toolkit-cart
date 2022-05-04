// Imports
import { createSlice } from '@reduxjs/toolkit';

// Initial state
const initialState = {
	isModalOpen:false
};

// Slice
const modalSlice = createSlice({
	name:'modal',
	initialState,
	reducers:{
		openModal:(state, action) => {
			state.isModalOpen = true;
		},
		closeModal:(state) => {
			state.isModalOpen = false;
		}
	}
});

// Actions export
export const { openModal, closeModal } = modalSlice.actions; 

// Reducer export
export default modalSlice.reducer;