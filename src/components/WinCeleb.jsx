import Confetti from 'react-confetti';

export const WinCeleb = () => {
	const [width, height] = [window.innerWidth, window.innerHeight];
	return (
		<Confetti
			width={width}
			height={height}
			numberOfPieces={400}
			gravity={0.2}
			recycle={false}
			tweenDuration={8000}
			initialVelocityY={20}
		/>
	);
};
