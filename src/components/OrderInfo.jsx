import React from 'react';

const OrderInfo = (props) => {

	const totalPrice = props.product.price * props.quantity;

	return (
		<div className='order-info'>
			<p>Product: {props.product.name}</p>
			<p>Price: {props.product.price.toFixed(2)} €</p>
			<p>Quantity: {props.quantity}</p>
			<p>Total Price: {totalPrice.toFixed(2)} €</p>
		</div>
	);
};

export default OrderInfo;
