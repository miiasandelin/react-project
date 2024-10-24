import React from 'react'
import './css/Header.css'

export const Header = ({ image, title }) => {
  return (
	<div className='Header'>
		<img src={image} alt='Header' className='header-image' />
		<h1 className='header-title'>Welcome to product page!</h1>
	</div>
  );
};
