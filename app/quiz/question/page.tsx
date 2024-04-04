import React from 'react';
import { Suspense } from 'react';
import AnswerButton from '@/app/components/AnswerButton';
import Answers from '@/app/components/Answers';

type quiz = {
	id: string;
	title: string;
	answers: string[];
	correct_answer: string;
};

const getQuestion = async (): Promise<quiz> => {
	'use server'
	const data = await fetch(`http://localhost:3000/api/quiz`, {
		cache: 'no-store',
	});
	const result = await data.json();
	console.log(result)
	return result;
};
const page = async () => {
	const question = await getQuestion();
	console.log(question)

	return (
		<main className='max-w-screen-md mx-auto flex flex-col flex-wrap pt-6 px-4'>
			<h4 className='text-md'>{question.title}</h4>
			<div className='flex flex-wrap overflow-auto mt-7 '>
					<Answers question={question} getQuestion={getQuestion} />
				{/* <Suspense fallback={<span>Loading..</span>}>
				</Suspense> */}
				{/* {question.answers.map((answer: string) => {
					return <AnswerButton key={answer} answer={answer} correct_answer={question.correct_answer}  />;
				})} */}
			</div>
		</main>
	);
};

export default page;
