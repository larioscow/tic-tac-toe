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

	return (
		<>
			<Board
				size={3}
				squares={squares}
				setSquares={setSquares}
				isXNext={[xIsNext, setXIsNext]}
			></Board>
		</>
	);
}
