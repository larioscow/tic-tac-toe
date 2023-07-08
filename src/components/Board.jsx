import { Button } from './Button';

export const Board = ({
	size = 3,
	squares,
	setSquares,
	isXNext,
	calculateWinner,
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
		}
	};

	return (
		<div className='board flex gap-1 flex-col w-fit m-auto'>
			{row.map((row, i) => {
				return (
					<div className='board-row flex gap-1 w-fit' key={i}>
						{row.map((box, index) => {
							index = position;
							position++;
							return (
								<Button
									key={index}
									value={squares[index]}
									index={index}
									handleClick={handleClick}
								></Button>
							);
						})}
					</div>
				);
			})}
		</div>
	);
};
