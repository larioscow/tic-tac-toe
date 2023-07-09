import './App.css';
import 'normalize.css';
import { Board } from './components/Board';
import { useState } from 'react';
import { LoadPage } from './components/LoadPage';
import { WinCeleb } from './components/WinCeleb';
import { AiOutlineReload } from 'react-icons/ai';

export default function App() {
	const [squares, setSquares] = useState(Array(9).fill(null));
	const [xIsNext, setXIsNext] = useState(true);
	const [history, setHistory] = useState([Array(9).fill(null)]);
	const [currentMove, setCurrentMove] = useState(0);
	const [refresh, setRefresh] = useState(false);
	const [appear, setAppear] = useState(true);
	const currentSquares = history[currentMove];

	const [play, setPlay] = useState(false);

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
	const handlePlay = nextSquares => {
		const nextHistory = [...history.slice(0, currentMove + 1), nextSquares];
		setHistory(nextHistory);
		setCurrentMove(nextHistory.length - 1);
		setXIsNext(!xIsNext);
	};
	// function jumpTo(nextMove) {
	// 	setCurrentMove(nextMove);
	// 	setXIsNext(nextMove % 2 === 0);
	// }
	// const moves = history.map((squares, move) => {
	// 	let description;
	// 	if (move > 0) {
	// 		description = 'Ir al movimiento #' + move;
	// 	} else {
	// 		description = 'Ir al inicio del juego';
	// 	}
	// 	return (
	// 		<li key={move}>
	// 			<button onClick={() => jumpTo(move)}>{description}</button>
	// 		</li>
	// 	);
	// });
	const reset = () => {
		setRefresh(true);
		setAppear(false);
		setTimeout(() => {
			setSquares(Array(9).fill(null));
			setHistory([Array(9).fill(null)]);
			setCurrentMove(0);
			setXIsNext(true);
			setRefresh(false);
			setAppear(true);
			setTimeout(() => {
				setAppear(false);
			}, 400);
		}, 400);
	};
	const playButton = () => {
		setPlay(true);
		setTimeout(() => {
			setPlay('end');
		}, 500);
	};
	const draw = () => {
		if (currentMove === 9 && !calculateWinner(squares)) {
			return true;
		}
	};

	return (
		<>
			{/* <div className='lines absolute w-screen'>
				<div className='vline bg-black w-74 h-2 m-1'></div>
				<div className='vline bg-black w-74 h-2 m-1'></div>
				<div className='hline bg-black w-74 h-2 m-1'></div>
				<div className='hline bg-black w-74 h-2 m-1'></div>
			</div> */}

			{play !== 'end' ? (
				<LoadPage onPlay={playButton} play={play}></LoadPage>
			) : (
				<div
					className={`${play ? 'grid' : 'hidden'} grid-rows-2 display h-screen`}
				>
					<span
						className={`block absolute top-10 w-screen text-5xl text-center font-bold ${
							xIsNext ? 'text-red-500' : 'text-emerald-500'
						} ${refresh ? 'fade' : null} ${appear ? 'appear' : null}`}
					>
						{xIsNext ? 'X' : 'O'}
					</span>

					<div className={`${appear ? 'appear' : null}`}>
						<Board
							size={3}
							squares={currentSquares}
							setSquares={setSquares}
							isXNext={[xIsNext, setXIsNext]}
							calculateWinner={calculateWinner}
							onPlay={handlePlay}
							fade={refresh}
						></Board>
					</div>

					{calculateWinner(squares) ? (
						<>
							{/* <span className='block text-center'>
								{calculateWinner(squares)
									? 'Winner: ' + calculateWinner(squares)
									: 'Winner: ' + calculateWinner(squares)}
							</span> */}
							<div className={`${refresh ? 'fade' : null}`}>
								<WinCeleb></WinCeleb>
							</div>
							<div
								className={`refresh ${
									refresh ? 'rotate' : 'refresh'
								} border-blue-600`}
								onClick={reset}
							>
								<AiOutlineReload></AiOutlineReload>
							</div>
						</>
					) : null}

					{draw() ? (
						<div
							className={`refresh ${
								refresh ? 'rotate' : 'refresh'
							} border-blue-600`}
							onClick={reset}
						>
							<AiOutlineReload></AiOutlineReload>
						</div>
					) : null}

					{/* <ol>{moves}</ol> */}
				</div>
			)}
		</>
	);
}
