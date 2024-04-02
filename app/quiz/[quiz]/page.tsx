import React from 'react';
type quiz = {
	id: string;
	title: string;
	answers: string[];
	correct_answer: string;
};

const getQuestion = async () => {
	const data = await fetch(`http://localhost:3000/api/quiz`);
};
const page = async () => {
	const quizQuestion = await getQuestion();
	return <div>page</div>;
};

export default page;
