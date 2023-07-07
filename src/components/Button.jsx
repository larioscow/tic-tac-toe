// import { useState } from 'react';

export const Button = ({ value, handleClick, index }) => {
	return (
		<>
			<button
				className='square text-5xl border-solid border-2 border-blue-600 rounded-md w-20 h-20 inline-flex items-center justify-center bg-blue-200 font-medium '
				onClick={() => handleClick(index)}
			>
				{value}
			</button>
		</>
	);
};
