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
		const data = await fetch(`/api/quiz`, {
			cache: 'no-store',
		});
		const result = await data.json();
		console.log(result);
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
