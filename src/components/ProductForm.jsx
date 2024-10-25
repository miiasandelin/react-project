import React, { useState } from 'react';

const ProductForm = (props) => {
	const [selectedProduct, setSelectedProduct] = useState(0);
	const [quantity, setQty] = useState(1);



	const handleProductChange = (e) => {
		const index = parseInt(e.target.value)
		setSelectedProduct(index);
		props.onProductChange(index);
	};

	const increaseQty = () => {
		const newQty = quantity + 1;
		setQty(newQty);
		props.onQtyChange(newQty);
	};

	const decreaseQty = () => {

		if (quantity > 1) {
			const newQty = quantity - 1;
			setQty(newQty);
			props.onQtyChange(newQty);
		};
	};

	return (
		<div className="product-form">
			<label>Product: </label>
			<select value={selectedProduct} onChange={handleProductChange}>
				{props.products.map((product, index) => (
					<option key={index} value={index}>
						{product.name} ({product.price.toFixed(2)} €)
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