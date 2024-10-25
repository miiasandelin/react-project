import React, { useState } from 'react';
import Header from '../components/Header';
import ProductForm from '../components/ProductForm';
import OrderInfo from '../components/OrderInfo';
import '../pages/css/ProductPage.css'

const ProductPage = () => {
	const products = ['AMD Ryzen 5 3600 (245€)', 'NVIDIA GeForce RTX 4070 (679€)']
	const prices = [245.0, 679.0]

	const [selectedProduct, setSelectedProduct] = useState(0);
	const [quantity, setQty] = useState(1);

	const handleProductChange = (index) => {
		setSelectedProduct(index);
	};

	const handleQtyChange = (newQty) => {
		setQty(newQty);
	};

	return (
		<div className='product-page'>
			<Header />
			<ProductForm
				products={products}
				prices={prices}
				onProductChange={handleProductChange}
				onQtyChange={handleQtyChange}
			/>

			<OrderInfo
				productName={products[selectedProduct]}
				price={prices[selectedProduct]}
				quantity={quantity}
			/>
		</div>
	)
};

export default ProductPage;
