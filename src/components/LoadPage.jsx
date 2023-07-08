import { BsFillPlayFill } from 'react-icons/bs';
import './LoadPage.css';

export const LoadPage = ({ onPlay, play }) => {
	return (
		<div className={`grid w-full h-screen`}>
			<div className='flex flex-col justify-center align-middle gap-3'>
				<h1
					className={`${
						play ? 'playText' : ''
					} text-9xl text-center font-Inter font-bold transition-all duration-100`}
				>
					TIC TAC TOE
				</h1>
				<button
					className={`${
						play ? 'play' : ''
					} flex py-4 px-8 bg-blue-400 w-fit items-center justify-center text-white font-bold text-2xl rounded-full transition-all duration-100 hover:bg-blue-500 mx-auto focus:scale-110 hover:scale-110 hover:rotate-3`}
					onClick={onPlay}
				>
					<span className='pr-1'>Play</span>
					<BsFillPlayFill className='scale-125 ' />
				</button>
			</div>
		</div>
	);
};
