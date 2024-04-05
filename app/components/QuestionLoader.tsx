import React from 'react';

const QuestionLoader = () => {
	return (
		<>
			<h4 className='text-md w-full h-20 bg-slate-600 animate-pulse'></h4>
			<div className='flex flex-wrap overflow-auto mt-7 '>
				<div className='w-full flex flex-wrap'>
					<button
						className={`text-white text-sm py-2 px-4 m-2 rounded-lg flex justify-center items-center flex-grow font-bold
                                max-md:w-2/4 h-9 bg-slate-600 animate-pulse`}
					></button>
					<button
						className={`text-white text-sm py-2 px-4 m-2 rounded-lg flex justify-center items-center flex-grow font-bold
                                max-md:w-2/4 h-9 bg-slate-600 animate-pulse`}
					></button>
					<button
						className={`text-white text-sm py-2 px-4 m-2 rounded-lg flex justify-center items-center flex-grow font-bold
                                max-md:w-2/4 h-9 bg-slate-600 animate-pulse`}
					></button>
					<button
						className={`text-white text-sm py-2 px-4 m-2 rounded-lg flex justify-center items-center flex-grow font-bold
                                max-md:w-2/4 h-9 bg-slate-600 animate-pulse`}
					></button>
				</div>
			</div>
		</>
	);
};

export default QuestionLoader;
