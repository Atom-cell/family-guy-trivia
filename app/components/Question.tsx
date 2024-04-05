'use client';

import React from 'react';
import Answers from './Answers';

type quiz = {
	id: string;
	title: string;
	answers: string[];
	correct_answer: string;
};

const Question = () => {
	const [question, setQuestion] = React.useState<quiz | null>(null);

	React.useEffect(() => {
		getQuestion();
	}, []);

	const getQuestion = async () => {
		const data = await fetch(`http://localhost:3000/api/quiz`, {
			cache: 'no-store',
		});
		const result = await data.json();
		console.log(result);
		setQuestion(result);
	};

	return (
		<>
			<h4 className='text-md'>{question?.title}</h4>
			<div className='flex flex-wrap overflow-auto mt-7 '>
				<Answers question={question} getQuestion={getQuestion} />
				{/* <Suspense fallback={<span>Loading..</span>}>
				</Suspense> */}
				{/* {question.answers.map((answer: string) => {
					return <AnswerButton key={answer} answer={answer} correct_answer={question.correct_answer}  />;
				})} */}
			</div>
		</>
	);
};

export default Question;
