'use client';

import React from 'react';
import { FiRefreshCcw } from 'react-icons/fi';

type quiz = {
	id: string;
	title: string;
	answers: string[];
	correct_answer: string;
};

type answerProps = {
	question: quiz | null;
	getQuestion: () => void;
};

const Answers = ({ question, getQuestion }: answerProps) => {
	const [correct, setCorrect] = React.useState(false);
	const [selectedAnswer, setSelectedAnswer] = React.useState('');
	const [showAnswer, setShowAnswer] = React.useState(false);

	const handleAnswer = (input: string) => {
		if (input === question?.correct_answer) {
			setCorrect(!correct);
		} else {
			setShowAnswer((prev) => !prev);
		}
	};

	const newQuestion = () => {
		setCorrect(false);
		setShowAnswer(false);
		setSelectedAnswer('');
		getQuestion();
	};

	return (
		<>
			<div className='w-full flex flex-wrap'>
				{question?.answers?.map((answer: string) => {
					return (
						<button
							key={answer}
							onClick={() => {
								if (selectedAnswer === '') {
									handleAnswer(answer);
									setSelectedAnswer(answer);
								}
							}}
							// style={question.correct_answer === answer ? { color: 'red' } : {}}
							style={
								selectedAnswer === answer && !correct
									? { backgroundColor: '#b91c1c' }
									: showAnswer && question?.correct_answer === answer
									? {
											outlineStyle: 'solid',
											outlineColor: '#22c55e',
											color: '#22c55e',
									  }
									: selectedAnswer === answer && correct
									? {
											outlineStyle: 'solid',
											outlineColor: '#22c55e',
											color: '#22c55e',
									  }
									: {}
							}
							className={`bg-slate-800 text-white text-sm py-2 px-4 m-2 rounded-lg flex justify-center items-center flex-grow font-bold
                                max-md:w-2/4 max-lg: ${
																	selectedAnswer && 'cursor-not-allowed'
																}`}
						>
							{answer}
						</button>
					);
				})}
			</div>
			<button
				onClick={() => newQuestion()}
				className='flex justify-center items-center text-slate-400 font-semibold text-lg mt-10'
			>
				<FiRefreshCcw className='text-xl mr-2' /> <h6>Do it again!</h6>
			</button>
		</>
	);
};

export default Answers;

// ${
//     showAnswer &&
//     question.correct_answer === answer &&
//     'outline outline-green-500 text-green-500'
// }
