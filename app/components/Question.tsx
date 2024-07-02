'use client';

import React from 'react';
import Answers from './Answers';
import endPoint from '../utils/endPoint';
import QuestionLoader from './QuestionLoader';

type quiz = {
	id: string;
	title: string;
	answers: string[];
	correct_answer: string;
};

const Question = () => {
	const [question, setQuestion] = React.useState<quiz | null>(null);
	const [loading, setLoading] = React.useState(false);

	React.useEffect(() => {
		getQuestion();
	}, []);

	const getQuestion = async () => {
		setLoading(true);
		const randomNumber = Math.floor(Math.random() * 16);
		const data = await fetch(`${endPoint}/api/quiz?id=${randomNumber}`,{
			method: 'GET',
			headers: {
				Accept: 'application/json'

			}
		});

		const result = await data.json();
		// console.log("Result : ",result);
		setLoading(false);
		setQuestion(result);
	};

	return (
		<>
			{loading ? (
				<QuestionLoader />
			) : (
				<>
					<h4 className='text-md'>{question?.title}</h4>
					<div className='flex flex-wrap overflow-auto mt-7 '>
						<Answers question={question} getQuestion={getQuestion} />
					</div>
				</>
			)}
		</>
	);
};

export default Question;
