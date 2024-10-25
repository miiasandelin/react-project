import React from 'react';

const OrderInfo = ({ productName, price, quantity }) => {
	const totalPrice = price * quantity;

  return (
	<div className='order-info'>
		<p>Product: {productName}</p>
		<p>Price: {price}</p>
		<p>Quantity: {quantity}</p>
		<p>Total Price: {totalPrice}</p>
	</div>
  );
};

export default OrderInfo;
