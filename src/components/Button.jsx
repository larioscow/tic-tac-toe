// import { useState } from 'react';
import './Button.css';

export const Button = ({ value, handleClick, index, fade, winner }) => {
	const setStyle = () => {
		let style = '';
		if (winner) {
			value === 'X' ? (style += ' bg-rose-300') : (style += ' bg-emerald-300');
		}
		if (fade) {
			style += ' fade';
		}
		if (value === 'X') {
			style += ' text-rose-500';
		}
		if (value === 'O') {
			style += ' text-emerald-500';
		}
		return style;
	};
	return (
		<>
			<button
				className={`square font-Inter text-5xl border-solid border border-blue-600 rounded inline-flex items-center justify-center  font-medium 
				${setStyle()}
				`}
				onClick={() => handleClick(index)}
			>
				{value}
			</button>
		</>
	);
};
