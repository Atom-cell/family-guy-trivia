'use client';

import React from 'react';

const AnswerButton = ({
	answer,
	correct_answer,
}: {
	answer: string;
	correct_answer: string;
}) => {
	const [correct, setCorrect] = React.useState(false);
	const [loading, setLoading] = React.useState(false);
	const [selectedAnswer, setSelectedAnswer] = React.useState('');
	const [showAnswer, setShowAnswer] = React.useState(false);

	const handleAnswer = (input: string) => {
		if (input === correct_answer) {
			setCorrect(!correct);
		} else {
			setShowAnswer((prev) => !prev);
		}
	};

	console.log('SHOW ANSWER : ', showAnswer);
	return (
		<>
			<button
				onClick={() => {
					handleAnswer(answer);
					setSelectedAnswer(answer);
				}}
				style={correct_answer === answer ? { color: 'green' } : {}}
				className={`bg-slate-800 text-white text-sm py-2 px-4 m-2 rounded-lg flex justify-center items-center flex-grow font-bold max-sm:w-full max-md:w-2/6 ${
					selectedAnswer === correct_answer &&
					correct &&
					' outline outline-green-500 text-green-500'
				}
            ${!correct && selectedAnswer === answer && 'bg-indigo-700'}`}
			>
				{answer} {showAnswer && '(0)(-)'}{' '}
				{showAnswer && correct_answer === answer && '✔'}
			</button>
		</>
	);
};

export default AnswerButton;
