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
    question: quiz;
    getQuestion: () => Promise<quiz>
};

const Answers = ({ question, getQuestion }: answerProps) => {
	const [correct, setCorrect] = React.useState(false);
	const [loading, setLoading] = React.useState(false);
	const [selectedAnswer, setSelectedAnswer] = React.useState('');
	const [showAnswer, setShowAnswer] = React.useState(false);

    React.useEffect(() => {
        console.log(question)
    },[question])
	const handleAnswer = (input: string) => {
		if (input === question.correct_answer) {
			setCorrect(!correct);
		} else {
			setShowAnswer((prev) => !prev);
		}
	};

	return (
		<>
			<div className='w-full flex flex-wrap'>
				{question.answers.map((answer: string) => {
					return (
						<button
							key={answer}
							onClick={() => {
								if (selectedAnswer === '') {
									handleAnswer(answer);
									setSelectedAnswer(answer);
								}
							}}
							style={
								showAnswer && question.correct_answer === answer
									? { color: '#22c55e' }
									: {}
							}
							className={`bg-slate-800 text-white text-sm py-2 px-4 m-2 rounded-lg flex justify-center items-center flex-grow font-bold
                         max-md:w-2/4 max-lg:
                        ${
													selectedAnswer === answer &&
													correct &&
													' outline outline-green-500 text-green-500'
												}
            ${!correct && selectedAnswer === answer && 'bg-red-700'}
            ${selectedAnswer && 'cursor-not-allowed'}
            ${
							showAnswer &&
							question.correct_answer === answer &&
							'outline outline-green-500 text-green-500'
						}
            `}
						>
							{answer}
						</button>
					);
				})}
			</div>
			<button onClick={() => getQuestion()} className='flex justify-center items-center text-slate-400 font-semibold text-lg mt-10'>
				<FiRefreshCcw className='text-xl mr-2' /> <h6>Do it again!</h6>
			</button>
		</>
	);
};

export default Answers;
