// Imports
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { calculateTotals, getCartItems } from './features/cart/cartSlice';
import Navbar from './components/Navbar';
import CartContainer from './components/CartContainer';
import Modal from './components/Modal';

// Component
function App() {

	// Store
	const { cartItems, isLoading } = useSelector((store) => { return store.cart });
	const { isModalOpen } = useSelector((store) => { return store.modal });
	const dispatch = useDispatch();

	// Load data from server
	useEffect(() => {
		// We can pass parameters, to indice type of data to load ...
		dispatch(getCartItems('smartphone'));
		// eslint-disable-next-line
	},[]);

	// Calculate totals
	useEffect(() => {
		dispatch(calculateTotals());
		// eslint-disable-next-line
	},[cartItems]);

	// Returns
	if (isLoading){
		return(
			<div className="loading">
				<h1>Loading...</h1>
			</div>
		);
	}
	return(
		<main>

			{/* Navbar */}
			<Navbar/>
			{/* Navbar */}

			{/* Cart */}
			<CartContainer/>
			{/* Cart */}

			{/* Modal */}
			{ isModalOpen && <Modal/> }
			{/* Modal */}

		</main>
	);

};

// Export
export default App;