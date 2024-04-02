import React from 'react';
import AnswerButton from '@/app/components/AnswerButton';

type quiz = {
	id: string;
	title: string;
	answers: string[];
	correct_answer: string;
};

const getQuestion = async () => {
	const data = await fetch(`http://localhost:3000/api/quiz`, {
		cache: 'no-store',
	});
	const result = await data.json();
	return result;
};
const page = async () => {
	const question = await getQuestion();

	return (
		<main className='max-w-screen-md mx-auto flex flex-col flex-wrap pt-6 px-4'>
			<h4 className='text-md'>{question.title}</h4>
			<div className='flex flex-wrap overflow-auto mt-7 '>
				{question.answers.map((answer: string) => {
					return <AnswerButton key={answer} answer={answer} />;
				})}
			</div>
		</main>
	);
};

export default page;
