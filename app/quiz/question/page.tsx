import React from 'react';
// import { Suspense } from 'react';
import Question from '@/app/components/Question';

const page = async () => {
	return (
		<main className='max-w-screen-md mx-auto flex flex-col flex-wrap pt-6 px-4 '>
			<Question />
		</main>
	);
};

export default page;
