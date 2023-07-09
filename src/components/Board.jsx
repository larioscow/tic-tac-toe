import { Button } from './Button';
import './Board.css';

export const Board = ({
	size = 3,
	squares,
	setSquares,
	isXNext,
	calculateWinner,
	onPlay,
	fade,
	winnerSquares,
	setWinnerSquares,
}) => {
	const row = Array(size).fill(Array(size).fill(null));
	let position = 0;

	const [xIsNext, setXIsNext] = isXNext;

	const handleClick = i => {
		const nextSquares = [...squares];
		if (!nextSquares[i] && !calculateWinner(nextSquares)) {
			xIsNext ? (nextSquares[i] = 'X') : (nextSquares[i] = 'O');
			setXIsNext(!xIsNext);
			setSquares(nextSquares);
			onPlay(nextSquares);
		}
		if (calculateWinner(nextSquares)) {
			setWinnerSquares(calculateWinner(nextSquares));
		}
	};

	return (
		<>
			<div className='board flex gap-3 flex-col mx-auto aspect-square justify-center'>
				{row.map((row, i) => {
					return (
						<div className='board-row flex gap-3' key={i}>
							{row.map((box, index) => {
								index = position;
								position++;
								return (
									<Button
										key={index}
										value={squares[index]}
										index={index}
										handleClick={handleClick}
										fade={fade}
										winner={
											index === winnerSquares[0] ||
											index === winnerSquares[1] ||
											index === winnerSquares[2]
										}
									></Button>
								);
							})}
						</div>
					);
				})}
			</div>
		</>
	);
};
