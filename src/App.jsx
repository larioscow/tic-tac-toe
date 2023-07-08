import './App.css';
import 'normalize.css';
import { Board } from './components/Board';
import { useEffect, useState } from 'react';

export default function App() {
	const [squares, setSquares] = useState(Array(9).fill(null));
	const [xIsNext, setXIsNext] = useState(true);

	// useEffect(() => {
	// 	setSquares([1, 2, 3, 4, 5, 6, 7, 8, 9]);
	// }, []);

	function calculateWinner(squares) {
		const lines = [
			[0, 1, 2],
			[3, 4, 5],
			[6, 7, 8],
			[0, 3, 6],
			[1, 4, 7],
			[2, 5, 8],
			[0, 4, 8],
			[2, 4, 6],
		];
		for (let i = 0; i < lines.length; i++) {
			const [a, b, c] = lines[i];
			if (
				squares[a] &&
				squares[a] === squares[b] &&
				squares[a] === squares[c]
			) {
				return squares[a];
			}
		}
		return null;
	}

	return (
		<div className='grid gap-5'>
			<h1 className='text-5xl text-center font-bold'>Tic Tac Toe</h1>
			<span
				className={`block text-5xl text-center font-bold ${
					xIsNext ? 'text-red-500' : 'text-emerald-500'
				}`}
			>
				{xIsNext ? 'X' : 'O'}
			</span>
			<Board
				size={3}
				squares={squares}
				setSquares={setSquares}
				isXNext={[xIsNext, setXIsNext]}
				calculateWinner={calculateWinner}
			></Board>
			{calculateWinner(squares) ? (
				<span className='block text-center'>
					{calculateWinner(squares)
						? 'Winner: ' + calculateWinner(squares)
						: 'Winner: ' + calculateWinner(squares)}
				</span>
			) : null}
		</div>
	);
}
