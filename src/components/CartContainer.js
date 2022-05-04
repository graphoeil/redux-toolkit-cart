// Imports
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { openModal } from '../features/modal/modalSlice';
import CartItem from './CartItem';

// Component
const CartContainer = () => {

	// Store
	const { cartItems, total, amount } = useSelector((store) => { return store.cart });
	const dispatch = useDispatch();

	// Returns
	if (amount < 1){
		return(
			<section className="cart">
				<header>
					<h2>Your bag</h2>
					<h4 className="empty-cart">is currently empty</h4>
				</header>
			</section>
		);
	}
	return(
		<section className="cart">
			<header>
				<h2>Your bag</h2>
			</header>
			<div>
				{
					cartItems.map((item) => {
						return <CartItem key={ item.id } { ...item }/>
					})
				}
			</div>
			<footer>
				<hr/>
				<div className="cart-total">
					<h4>Total <span>${ total.toFixed(2) }</span></h4>
				</div>
				<button className="btn clear-btn" onClick={() => { dispatch(openModal()); }}>
					Clear cart
				</button>
			</footer>
		</section>
	);

};

// Export
export default CartContainer;