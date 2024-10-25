import React, { useState } from 'react';
import Header from '../components/Header';
import ProductForm from '../components/ProductForm';
import OrderInfo from '../components/OrderInfo';
import '../pages/css/ProductPage.css'

import headerImage from '../assets/headerImage.png';

const ProductPage = () => {

	const products = 
	[
		{
			name: "AMD Ryzen 5 3600",
			price: 245.0
		},
		{
			name: "NVIDIA GeForce RTX 4070",
			price: 679.0
		}
	]

	const [selectedProduct, setSelectedProduct] = useState(0);
	const [quantity, setQty] = useState(1);

	return (
		<div className='product-page'>
			<Header image={headerImage} title="Welcome to product page!"/>
			<ProductForm
				products={products}
				onProductChange={setSelectedProduct}
				onQtyChange={setQty}
			/>

			<OrderInfo
				product={products[selectedProduct]}
				quantity={quantity}
			/>
		</div>
	)
};

export default ProductPage;
