// Imports
import React from 'react';
import { useDispatch } from 'react-redux';
import { clearCart, getCartItems } from '../features/cart/cartSlice';
import { closeModal } from '../features/modal/modalSlice';

// Component
const Modal = () => {

	// Store
	const dispatch = useDispatch();

	// Return
	return(
		<aside className="modal-container">
			<div className="modal">
				<h4>Remove all items from your shopping cart ?</h4>
				<div className="btn-container">
					<button type="button" className="btn confirm-btn" 
						onClick={ () => { dispatch(clearCart()); dispatch(closeModal()); dispatch(getCartItems('smartphone')); } }>
						Confirm
					</button>
					<button type="button" className="btn clear-btn" 
						onClick={ () => { dispatch(closeModal()); } }>
						Cancel
					</button>
				</div>
			</div>
		</aside>
	);

};

// Export
export default Modal;