'use client';

import React from 'react';

const AnswerButton = ({ answer }: { answer: string }) => {
	return (
		<button className='bg-slate-800 text-white text-sm py-2 px-4 m-2 rounded-lg flex justify-center items-center flex-grow font-bold'>
			{answer}
		</button>
	);
};

export default AnswerButton;
