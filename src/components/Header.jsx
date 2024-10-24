import React from 'react'
import './css/Header.css'

const Header = ({ image, title }) => {
  return (
	<div className='Header'>
		<img src={image} alt='Header' className='header-image' />
		<h1 className='header-title'>{title}</h1>
	</div>
  );
};

export default Header;