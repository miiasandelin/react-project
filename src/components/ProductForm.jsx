import React, { useState } from 'react';

const ProductForm = ({ products, prices, productChange, qtyChange }) => {

	// functions for the dropdown menu and quantity

	return (
		<div className="product-form">
			<label>Product: </label>
			<select value={selectedProduct} onChange={handleProductChange}>
				{products.map((product, index) => (
					<option key={index} value={index}>
						{product}
					</option>
				))}
			</select>

			<div className="quantity-controls">
				<button onClick={decreaseQty}>-</button>
				<span>{quantity}</span>
				<button onClick={increaseQty}>+</button>
			</div>
		</div >
	)
}

export default ProductForm;