import React from 'react';

const Header = ({ title }) => {
	return (
		<nav className='nav'>
			<h1>{title}</h1>
		</nav>
	);
};

export default Header;
