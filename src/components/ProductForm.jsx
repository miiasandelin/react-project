import React, { useState } from 'react';

const ProductForm = ({ products, prices, productChange, qtyChange }) => {
	const [selectedProduct, setSelectedProduct] = useState(0);
	const [quantity, setQuantity] = useState(1);

	const handleProductChange = (e) => {
		const index = parseInt(e.target.value)
		setSelectedProduct(index);
		onProductChange(index);
	};

	const increaseQty = () => {
		const newQuantity = quantity + 1;
		setQuantity(newQuantity);
		onQuantityChange(newQuantity);
	};

	const decreaseQty = () => {

		if (quantity > 1) {
			const newQuantity = quantity - 1;
			setQuantity(newQuantity);
			onQuantityChange(newQuantity);
		};
	};

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