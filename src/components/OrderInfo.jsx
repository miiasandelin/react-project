import React from 'react';
import './css/OrderInfo.css'

const OrderInfo = (props) => {

	const totalPrice = props.product.price * props.quantity;

	return (
		<div className='order-info'>
			<h2>Order info</h2>
			<table>
				<thead>
					<tr>
						<th>Product</th>
						<th>Quantity</th>
						<th>Total</th>
					</tr>
				</thead>
				<tbody>
					<tr>
						<td>{props.product.name} {props.product.price.toFixed(2)} €</td>
						<td>{props.quantity}</td>
						<td>{totalPrice.toFixed(2)} €</td>
					</tr>
				</tbody>
			</table>
		</div>
	);
};

export default OrderInfo;
