// Imports
import React from 'react';
import { useDispatch } from 'react-redux';
import { removeItem, increase, decrease } from '../features/cart/cartSlice';
import { ChevronDown, ChevronUp } from '../icons';

// Component
const CartItem = (props) => {

	// Variables
	const { id, title, price, img, amount } = props;

	// Store
	const dispatch = useDispatch();

	// Return
	return(
		<article className="cart-item">
			<img src={ img } alt={ title } />
			<div>
				<h4>{ title }</h4>
				<h4 className="item-price">${ price }</h4>
				{/* We pass the id (payload) directly in the function ,-) */}
				<button className="remove-btn" onClick={ () => { dispatch(removeItem(id)); } }>
					Remove
				</button>
			</div>
			<div>
				<button className="amount-btn" onClick={ () => { dispatch(increase(id)); } }>
					<ChevronUp/>
				</button>
				<p className="amount">{ amount }</p>
				<button className="amount-btn" onClick={ () => {
					// Don't forget component re-render ,-)
					if (amount === 1){
						dispatch(removeItem(id));
					} else {
						dispatch(decrease(id));
					}
				} }>
					<ChevronDown/>
				</button>
			</div>
		</article>
	);

};

// Export
export default CartItem;