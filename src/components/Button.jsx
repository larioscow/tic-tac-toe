// import { useState } from 'react';
import './Button.css';

export const Button = ({ value, handleClick, index, fade }) => {
	return (
		<>
			<button
				className={`square text-5xl border-solid border border-blue-600 rounded inline-flex items-center justify-center  font-medium 
				${value === 'X' ? 'text-rose-500' : 'text-emerald-500'} ${
					fade ? 'fade' : null
				}`}
				onClick={() => handleClick(index)}
			>
				{value}
			</button>
		</>
	);
};
