/** @format */

import React from 'react';

const Input = ({ query, handleChange, searchQuery }) => {
	return (
			<input
				type='text'
				placeholder='Search City...'
				value={query}
				onChange={handleChange}
				onKeyPress={searchQuery}
			/>
	);
};

export default Input;
