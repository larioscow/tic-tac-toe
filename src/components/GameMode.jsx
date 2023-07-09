import './GameMode.css';
export const GameMode = ({ gamemode, setGameMode }) => {
	const gameModeButton = gamemode => {
		setGameMode(gamemode);
		setTimeout(() => {
			setGameMode('end');
		}, 400);
	};
	return (
		<div
			className={`${
				gamemode === 'end' ? 'hidden' : null
			} grid w-full h-screen sm:grid-rows-4  grid-rows-5 place-items-center`}
		>
			<h1
				className={`
      ${gamemode ? 'hideText' : null}
      mode-tittle sm:text-9xl text-8xl text-center row-start-1 row-span-2 md:row-start-2 md:row-span-1`}
			>
				GAME MODE
			</h1>
			<div className='flex md:gap-40 gap-5 flex-col sm:flex-row m-auto place-items-center row-start-3'>
				<div className='scale-wrap hover:scale-110 duration-75'>
					<div
						className={`
          ${gamemode ? 'hideSolo' : null}
          grid solo bg-blue-400 w-60 h-44 place-content-center rounded-xl text-2xl 
          text-white hover:cursor-pointer hover:bg-blue-500 `}
						onClick={() => gameModeButton('solo')}
					>
						Solo
					</div>
				</div>
				<div className='scale-wrap hover:scale-110 duration-75 cursor-not-allowed'>
					<div
						className={`
          ${gamemode ? 'hideAi' : null}
          grid opt2 bg-blue-400 w-60 h-44 place-content-center rounded-xl text-2xl 
        text-white hover:bg-blue-500 hover:scale-110`}
					>
						AI
					</div>
				</div>
			</div>
		</div>
	);
};
