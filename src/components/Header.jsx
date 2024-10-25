import React from 'react'
import './css/Header.css'

const Header = (props) => {
  return (
	<div className='header'>
		<img src={props.image} alt='Header' className='header-image' />
		<h1 className='header-title'>{props.title}</h1>
	</div>
  );
};

export default Header;